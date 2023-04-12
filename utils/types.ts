import { NextApiRequest, NextApiResponse } from "next";
import { Types } from "mongoose";

export interface ItemDataType {
	title: string;
	image: string;
	price: string;
	description: string;
	email: string;
}

export interface UserDataType {
	name: string;
	email: string;
	password: string;
}

export interface DecodedType {
	email: string;
}

export interface ExtendedNextApiRequestAuth extends NextApiRequest {
	headers: {
		authorization: string;
	}
	body: {
		email: string;
	}
}

export interface ResMessageType {
	message: string;
	token?: string;
}

export interface ExtendedNextApiRequestUser extends NextApiResponse {
	body: UserDataType;
}

export interface SavedUserDataType extends UserDataType {
	_id: Types.ObjectId;
}

export interface SavedItemDataType extends ItemDataType {
	_id: Types.ObjectId;
}

export interface ResReadAllType {
	message: string;
	allItems?: SavedItemDataType[];
}

export interface ExtendedNextApiRequestItem extends NextApiRequest {
	body: ItemDataType;
}

export interface ResReadSingleType {
	message: string;
	singleItem?: SavedItemDataType;
}
