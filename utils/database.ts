import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://ogatatsu:puku123puku@cluster0.mq7iilc.mongodb.net/appDataBase3?retryWrites=true&w=majority");
		console.log("Success: Connected to MongoDB");
	} catch {
		console.log("Failure: Unconnected to MongoDB");
		throw new Error();
	}
};

export default connectDB;
