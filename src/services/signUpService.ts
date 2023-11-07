import { authData } from "../interfaces/authData";
import { signUpReturn } from "../interfaces/returnType/signUpReturn";
import { signUpRepo } from "../repository/signUpRepo";

export const signUpService = async (data: authData): Promise<signUpReturn> => {
    try {

        const responseFromRepo = await signUpRepo(data);
        return responseFromRepo

    } catch (error) {
        return {
            success: false,
            username: "Unable to store"

        }

    }


}