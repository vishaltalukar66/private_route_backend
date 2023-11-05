import { authData } from "../interfaces/authData";
import { signUpRepoReturn } from "../interfaces/returnType/signUpRepoReturn";
import { User } from "../models/userModel";
import bcrypt from 'bcrypt';



export const signUpRepo = async (data: authData): Promise<signUpRepoReturn> => {


    try {
        const userExisting = await User.findOne({ username: data.username });


        if (userExisting === null) {
            // User not existing Add to DB
            // console.log('User not existing');


            const username = data.username as string;
            const password = data.password as string;
            const salt = bcrypt.genSaltSync(parseInt(process.env.SALTROUND as string));
            const hashPassword = bcrypt.hashSync(password, salt); // hash Password
            console.log('into system');
            //use User model to create new model and save
            const newUser = new User({ username, 'password': hashPassword });
            await newUser.save();
            console.log('User saved successfully');
            return {
                success: true,
                username: data.username

            }

        }
        else {
            //User existing 
            console.log('userExisting');
            return {
                success: false,
                username: "User already existing"
            }

        }
    } catch (error) {
        return {
            success: false,
            username: "Unable to store"

        }
    }





}