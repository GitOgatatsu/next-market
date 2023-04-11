import jwt from "jsonwebtoken";

const secret_key = "nextmarket";



const auth = (handler) => {
	return async (req, res) => {

		if (req.method === "GET") {
			return handler(req, res);
		}

//		const token = await req.headers.authorization.split(" ")[1];
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9nYXRhdHN1QHRlc3QuY29tIiwiaWF0IjoxNjgxMjA2NjU5LCJleHAiOjE2ODEyODk0NTl9.wuOEFlZClQfWkpr0vbsSH8lojyUUdvQV6Ab9nc_Km0M";
		if (!token) {
			return res.status(401).json({ message: "トークンがありません" });
		}
		try {
			const decoded = jwt.verify(token, secret_key);
//			console.log(decoded);
			req.body.email = decoded.email;
			return handler(req, res);
		} catch (err) {
			return res.status(401).json({ message: "トークンが不正です" });
		}
	};
};

export default auth;
