import express from "express";
import mongoose from "mongoose";
import container from "./iocContainer";

const app = express();
app.use(express.json());

container.resolve("mongooseConnection");

const schema = new mongoose.Schema({
    name: String
});

const User = mongoose.model("User", schema);

app.get("/", async (req, res) => {
    await User.create({ name: "jonas" });

    res.json();
});

export default app;
