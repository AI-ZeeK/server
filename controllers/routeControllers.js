import RoutesSchema from "../models/postModel.js";

export const getRoute = async (req, res) => {
	const trackNumber = await RoutesSchema.find();
	res.status(200).json(trackNumber);
};

export const createRoute = async (req, res) => {
	const {
		currentLocation,
		Route,
		destination,
		productName,
		estimatedDeliveryDate,
		itemDescription,
	} = req.body;

	try {
		const trackingNumber = Math.floor(Math.random() * 10000000000000000000);

		const trackNumber = await RoutesSchema.find({
			trackingNumber,
		});
		if (trackNumber === trackingNumber) {
			const trackingNumber2 = Math.floor(Math.random() * 10000000000000000000);
			const newRoute = await RoutesSchema.create({
				trackingNumber: trackingNumber2,
				currentLocation,
				Route,
				destination,
				productName,
				estimatedDeliveryDate,
				itemDescription,
			});
			res.status(201).json(newRoute);
		} else {
			const newRoute = await RoutesSchema.create({
				trackingNumber,
				currentLocation,
				Route,
				destination,
				productName,
				estimatedDeliveryDate,
				itemDescription,
			});
			await newRoute.save();
			res.status(201).json(newRoute);
		}
	} catch (error) {
		res.status(401).json({ message: "error" });
	}
};

export const updateRoute = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedDeliveryDetail = await RoutesSchema.findByIdAndUpdate(
			id,
			req.body,
			{
				new: true,
			}
		);
		res.status(202).json(updatedDeliveryDetail);
	} catch (error) {
		res.status(409).json({ message: "error updating" });
	}
};

export const deleteRoute = async (req, res) => {
	try {
		const { id } = req.params;
		const deletDetails = await RoutesSchema.findById(id);

		await deletDetails.remove();
		res.status(200).json({ id });
	} catch (error) {
		res.status(409).json({ message: "Deleted" });
	}
};

export const searchProduct = async (req, res) => {
	try {
		const { trackingNumber } = req.body;
		const trackNumber = await RoutesSchema.find({
			trackingNumber: trackingNumber,
		});
		if (!trackNumber) {
			res.status(401).json({ message: "no tracking number" });
			throw new Error({ message: "no id" });
		}
		res.status(200).json(trackNumber);
	} catch (error) {
		res.status(409).json(error);
	}
};
