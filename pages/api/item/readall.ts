import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

import type { NextApiRequest, NextApiResponse } from "next";
import { SavedItemDataType, ResReadAllType } from "../../../utils/types";

const getAllItems = async (req: NextApiRequest, res: NextApiResponse<ResReadAllType>) => {
	try {
		await connectDB();
		const allItems: SavedItemDataType[] = await ItemModel.find();
		return res.status(200).json({ mesasge: "アイテム読み取り成功(All)", allItems: allItems });
	} catch (err) {
		return res.status(400).json({ mesasge: "アイテム読み取り失敗(All)" });
	}
};

export default getAllItems;
