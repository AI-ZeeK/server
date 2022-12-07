import express from "express";
import dotenv from "dotenv";
const Dotenv = dotenv.config();
import cors from "cors";
import colors from "colors";
import connectDB from "./config/db.js";
import routes from "./routes/update.js";

const app = express();
connectDB();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", routes);

app.get("/", (req, res) => {
	res.status(200).json({ message: "Ot's Server" });
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
	console.log(`Server started on port:${PORT}`.red.bold.italic)
);
