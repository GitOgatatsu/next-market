import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";
import auth from "../../../utils/auth";

import { NextApiResponse } from "next";
import { ExtendedNextApiRequestAuth, ExtendedNextApiRequestItem, ResMessageType } from "../../../utils/types";

const createItem = (req: ExtendedNextApiRequestItem, res: NextApiResponse<ResMessageType>) => {
	try {
		connectDB();
//		console.log(req.body);
		ItemModel.create(req.body);
		return res.status(200).json({ message: "アイテム作成成功" });
	} catch (err) {
		return res.status(400).json({ message: "アイテム作成失敗" });
	}
};

export default auth(createItem);
