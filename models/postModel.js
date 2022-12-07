import mongoose from "mongoose";

const routesSchema = mongoose.Schema(
	{
		trackingNumber: { type: Number, required: true },
		currentLocation: String,
		Route: String,
		destination: String,
		productName: String,
		itemDescription: String,
		estimatedDeliveryDate: String,
	},
	{
		timestamps: true,
	}
);

const RoutesSchema = mongoose.model("RoutesPost", routesSchema);
export default RoutesSchema;
