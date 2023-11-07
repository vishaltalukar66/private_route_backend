import { authData } from "../interfaces/authData";
import { loginReturn } from "../interfaces/returnType/loginReturn";

import { loginRepo } from "../repository/loginRepo";
import { generateJWT } from "../utils/generateJWT";

export const loginService = async (data: authData): Promise<loginReturn> => {
    try {

        const responseFromRepo = await loginRepo(data);

        if (responseFromRepo.success) {
            //call JWT() to generate token, pass the user details
            const jwt = await generateJWT(responseFromRepo);
            if (jwt.success) {
                //set jwt to response
                responseFromRepo.JWT = jwt.jwt;
            }
        }

        return responseFromRepo;

    } catch (error) {
        return {
            success: false,
            message: "Unable to connect, Contact Admin"

        }
    }
}