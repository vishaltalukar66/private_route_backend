import mongoose from "mongoose";

// Define a schema for the user collection
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

// Create a model for the user collection
export const User = mongoose.model('User', userSchema);


