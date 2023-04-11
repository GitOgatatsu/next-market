import { NextApiRequest, NextApiResponse } from "next";

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
}

export interface ExtendedNextApiRequestUser extends NextApiResponse {
	body: UserDataType;
}
