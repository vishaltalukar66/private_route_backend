import { FastifyRequest } from "fastify";
import { confidentialDataReturn } from "../interfaces/returnType/confidentialDataReturn";
import { jwtAuthService } from "./jwtAuthService";
import { decodeJWT } from "../utils/decodeJWT";
import { decodeJWTReturn } from "../interfaces/returnType/decodeJWTReturn";

export const confidentialDataService = async (request: FastifyRequest): Promise<confidentialDataReturn> => {
    try {
        //check if cookie is valid or no
        const jwtAuth = await jwtAuthService(request);

        if (jwtAuth.success) {
            //extract cookie from header
            const cookie = request.headers.cookie as string;
            // split the string to get jwt token from cookie
            const cookieArray = cookie.split("=");
            // call decode() to check the signature and not expired
            const responseFromDecode = decodeJWT(cookieArray[1]) as decodeJWTReturn;
            if (responseFromDecode.success) {
                return responseFromDecode.payload as confidentialDataReturn
            }
            else {
                return {
                    success: false,
                    message: 'Unable to fetch data from cookie'
                }

            }
        }
        else {
            //not successful auth
            return jwtAuth;
        }

    } catch (error) {
        return {
            success: false,
            message: "Some error contact Admin"
        }
    }
}