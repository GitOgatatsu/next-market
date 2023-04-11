import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

const createItem = (req, res) => {
	try {
		connectDB();
//		console.log(req.body);
		ItemModel.create(req.body);
		return res.status(200).json({ message: "アイテム作成" });
	} catch (err) {

	}
};

export default createItem;
