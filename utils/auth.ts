import jwt from "jsonwebtoken";

const secret_key = "nextmarket";

import type { NextApiResponse } from "next";
import type { ExtendedNextApiRequestAuth, DecodedType, ResMessageType } from "./types";



const auth = (handler: Function) => {
	return async (req: ExtendedNextApiRequestAuth, res: NextApiResponse<ResMessageType>) => {

		if (req.method === "GET") {
			return handler(req, res);
		}

		const token = await req.headers.authorization.split(" ")[1];
//		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9nYXRhdHN1QHRlc3QuY29tIiwiaWF0IjoxNjgxMjc2ODMxLCJleHAiOjE2ODEzNTk2MzF9.MkmddSVgaTPmiN6r6NtXYogMoftP35yn31X6u6PXiGU";
		if (!token) {
			return res.status(401).json({ message: "トークンがありません" });
		}
		try {
			const decoded = jwt.verify(token, secret_key);
//			console.log(decoded);
			req.body.email = (decoded as DecodedType).email;
			return handler(req, res);
		} catch (err) {
			return res.status(401).json({ message: "トークンが不正です" });
		}
	};
};

export default auth;
