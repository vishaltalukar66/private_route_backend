
import jwt from 'jsonwebtoken';
import { JWTDecode } from "../interfaces/JWTDecode";
import { decodeJWTReturn } from '../interfaces/returnType/decodeJWTReturn';

export const decodeJWT = (token: string): decodeJWTReturn => {

    try {
        const tokenData = jwt.verify(token, `${process.env.JWT}`) as JWTDecode;

        return {
            success: true,
            payload: tokenData.data
        }

    } catch (error) {
        return { success: false };
    }



}