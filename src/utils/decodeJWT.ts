
import jwt from 'jsonwebtoken';
import { JWTDecode } from "../interfaces/JWTDecode";
import { decodeJWTReturn } from '../interfaces/returnType/decodeJWTReturn';

export const decodeJWT = (token: string): decodeJWTReturn => {

    try {
        //decode the jwt token and return
        //it even checked it token is exipred or no
        const tokenData = jwt.verify(token, `${process.env.JWT}`) as JWTDecode;

        return {
            success: true,
            payload: tokenData.data
        }

    } catch (error) {
        return { success: false };
    }



}