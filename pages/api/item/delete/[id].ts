import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";
import auth from "../../../../utils/auth";

import { NextApiRequest, NextApiResponse } from "next";
import { ExtendedNextApiRequestItem, SavedItemDataType, ResMessageType } from "../../../../utils/types";

const deleteItem = async (req: ExtendedNextApiRequestItem, res: NextApiRequest<SavedItemDataType>) => {
	try {
		await connectDB();
		const singleItem: SavedItemDataType | null = await ItemModel.findById(req.query.id);
		if (!singleItem) {
			return res.status(400).json({ message: "該当アイテムなし" });
		} else {
			if (singleItem.email === req.body.email) {
				await ItemModel.deleteOne({ _id: req.query.id });
				return res.status(200).json({ message: "アイテム削除成功" });
			} else {
				throw new Error();
			}
		}
	} catch (err) {
		return res.status(400).json({ message: "アイテム削除失敗" });
	}
};

export default auth(deleteItem);
