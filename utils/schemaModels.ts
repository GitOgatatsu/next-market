import mongoose from "mongoose";

const Schema = mongoose.Schema;

import { ItemDataType, UserDataType } from "./types";



const ItemSchema = new Schema<ItemDataType>({
	title: String,
	image: String,
	price: String,
	description: String,
	email: String
});
export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema);



const UserSchema = new Schema<UserDataType>({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: String
});
export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
