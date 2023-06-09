import jwt from "jsonwebtoken";
import connectDB from "../../../utils/database";
import { UserModel } from "../../../utils/schemaModels";

import { NextApiResponse } from "next";
import { ExtendedNextApiRequestUser, ResMessageType, SaveUserDataType } from "../../../utils/types";

const secret_key = "nextmarket";

const loginUser = async (req: ExtendedNextApiRequestUser, res: NextApiResponse<ResMessageType>) => {
	try {
		await connectDB();
		const savedUserData:SaveUserDataType = await UserModel.findOne({ email: req.body.email });
//		console.log(savedUserData);
		if (savedUserData) {
			if (req.body.password === savedUserData.password) {
				const payload = {
					email: req.body.email
				};
				const token = jwt.sign(payload, secret_key, { expiresIn: "23h" });
				console.log(token);
				return res.status(200).json({ message: "ログイン成功", token: token });
			} else {
				return res.status(400).json({ message: "ログイン失敗：パスワードが違います" });
			}
		} else {
			return res.status(400).json({ message: "ログイン失敗：ユーザ登録してください" });
		}
	} catch (err) {
		return res.status(400).json({ message: "ログイン失敗" });
	}
};

export default loginUser;
