import { authData } from "../interfaces/authData";
import { signUpReturn } from "../interfaces/returnType/signUpReturn";
import { User } from "../models/userModel";
import bcrypt from 'bcrypt';



export const signUpRepo = async (data: authData): Promise<signUpReturn> => {


    try {

        //check if username exist or no
        const userExisting = await User.findOne({ username: data.username });


        if (userExisting === null) {
            // User not existing Add to DB
            // console.log('User not existing');
            const username = data.username as string;
            const password = data.password as string;
            //hash the password
            const salt = bcrypt.genSaltSync(parseInt(process.env.SALTROUND as string));
            const hashPassword = bcrypt.hashSync(password, salt); // hash Password

            //use User model to create new model and save
            const newUser = new User({ username, 'password': hashPassword });
            await newUser.save();

            return {
                success: true,
                username: data.username,
                message: 'Successfully created  account'

            }

        }
        else {
            //User existing 
            console.log('userExisting');
            return {
                success: false,
                message: "User already existing"
            }

        }
    } catch (error) {
        return {
            success: false,
            message: "Unable to store"

        }
    }





}