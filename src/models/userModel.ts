import mongoose from "mongoose";

// Define a schema for the user collection
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

// Create a model for the user collection
export const User = mongoose.model('User', userSchema);

// // Function to save a new user
// export async function saveUser(username: string, email: string) {
//     try {
//         const newUser = new User({ username, email });
//         await newUser.save();
//         console.log('User saved successfully');
//     } catch (error) {
//         console.error('Error saving user:', error);
//     }
// }

// // Function to retrieve users
// export async function getUsers(name: string) {
//     try {
//         const users = await User.findOne({ username: name });
//         console.log('Users:', users);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//     }
// }


