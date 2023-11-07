import { FastifyRequest } from "fastify";
import { decodeJWT } from "../utils/decodeJWT";
import { jwtAuthRepo } from "../repository/jwtAuthRepo";
import { decodeJWTReturn } from "../interfaces/returnType/decodeJWTReturn";
import { loginReturn } from "../interfaces/returnType/loginReturn";
import { jwtAuthServiceReturn } from "../interfaces/returnType/jwtAuthServiceReturn";

export const jwtAuthService = async (request: FastifyRequest): Promise<jwtAuthServiceReturn> => {
    try {
        const cookie = request.headers.cookie as string;
        if (cookie === undefined) {

            return {
                success: false,
                message: "Cookie not available, User not Logged in"

            }
        }
        else {
            // split the string to get jwt token from cookie
            const cookieArray = cookie.split("=");
            // call decode() to check the signature and not expired
            const responseFromDecode = decodeJWT(cookieArray[1]) as decodeJWTReturn;
            if (responseFromDecode.success) {
                //once cookie is decoded check if the user details are in DB or no
                const responseFromRepo = await jwtAuthRepo(responseFromDecode.payload as loginReturn);
                if (responseFromRepo.success) {
                    return {
                        success: responseFromRepo.success,
                        message: "User verified"
                    }
                }
                else {
                    return {
                        success: false,
                        message: "User not verified"

                    }
                }
            }
            else {
                return {
                    success: false,
                    message: "Cookie Expired"

                }
            }

        }
    } catch (error) {
        return {
            success: false,
            message: "Some error contact Admin"
        }
    }




}