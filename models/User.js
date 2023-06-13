import mongoose from "mongoose";
import { Schema } from "mongoose";

const User = new Schema({
    Name: String,
    Email: String,
    Password: String,
    Pin: Number,
    Number: Number,
    Address: String,
    Pancard: String,
});

export default mongoose.model("Users",User);