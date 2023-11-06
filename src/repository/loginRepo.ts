import { authData } from "../interfaces/authData";
import { loginReturn } from "../interfaces/returnType/loginReturn";
import { User } from "../models/userModel";
import bcrypt from 'bcrypt';


export const loginRepo = async (data: authData): Promise<loginReturn> => {
    try {
        const getUser = await User.findOne({ username: data.username });

        if (getUser === null) {
            return {
                success: false,
                message: 'User not found'
            }


        }
        else {

            const id = String(getUser?._id);
            const passwordMatch: Boolean = bcrypt.compareSync(data.password as string, getUser?.password as string);
            if (passwordMatch) {
                return {
                    success: true,
                    username: data.username,
                    mongoID: id,
                    message: 'Login Successfull'

                }
            }
            else {
                return {
                    success: false,
                    message: 'Password does not match'
                }
            }


        }

    } catch (error) {
        return {
            success: false,
            message: 'Unable to fetch data'
        }
    }

}