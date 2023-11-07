import { authData } from "../interfaces/authData";
import { loginReturn } from "../interfaces/returnType/loginReturn";
import { User } from "../models/userModel";
import bcrypt from 'bcrypt';


export const loginRepo = async (data: authData): Promise<loginReturn> => {
    try {
        //search user data based on username
        const getUser = await User.findOne({ username: data.username });

        if (getUser === null) {
            return {
                success: false,
                message: 'User not found'
            }
        }
        else {

            //Comapre password, password from db & user input password
            const passwordMatch: Boolean = bcrypt.compareSync(data.password as string, getUser?.password as string);

            const id = String(getUser?._id);
            if (passwordMatch) {
                //if match return userdata
                return {
                    success: true,
                    username: data.username,
                    mongoDb_id: id,
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