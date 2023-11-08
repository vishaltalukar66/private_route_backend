import jwt from 'jsonwebtoken';
import { loginReturn } from '../interfaces/returnType/loginReturn';
import { JWTReturn } from '../interfaces/returnType/JWTReturn';


export const generateJWT = async (data: loginReturn): Promise<JWTReturn> => {


    const expiration = Math.floor(Date.now() / 1000) + 2 * 60; // 2 minutes in seconds
    const payload = data;
    try {
        return {
            success: true,
            //Generate the token and return
            jwt: (jwt.sign({
                exp: expiration,
                data: payload
            },
                `${process.env.JWT}`
            ))
        }
    } catch (error) {
        return { success: false };
    }

}