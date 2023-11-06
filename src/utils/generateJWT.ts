import jwt from 'jsonwebtoken';
import { loginReturn } from '../interfaces/returnType/loginReturn';
import { JWTReturn } from '../interfaces/returnType/JWTReturn';


export const generateJWT = async (data: loginReturn): Promise<JWTReturn> => {
    const expiration = Math.floor(Date.now() / 1000) + 60 * 2; // 60 seconds (1 minute)

    // const expiration = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // 24 hours
    const payload = data;
    try {
        return {
            success: true,
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