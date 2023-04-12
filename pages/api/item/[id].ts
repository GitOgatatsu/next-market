import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

import { NextApiRequest, NextApiResponse } from "next";

const getSingleItem = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		await connectDB();
//		console.log(req.query);
		const singleItem = await ItemModel.findById(req.query.id);
		if (!singleItem) {
			return res.status(400).json({ message: "該当アイテムなし(Single)", singleItem: singleItem });
		} else {
			return res.status(200).json({ message: "アイテム読み取り成功(Single)", singleItem: singleItem });
		}
	} catch (err) {
		return res.status(400).json({ message: "アイテム読み取り失敗(Single)" });
	}
};

export default getSingleItem;
