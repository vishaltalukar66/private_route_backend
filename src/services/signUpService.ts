import { authData } from "../interfaces/authData";
import { signUpRepoReturn } from "../interfaces/returnType/signUpRepoReturn";
import { signUpRepo } from "../repository/signUpRepo";

export const signUpService = async (data: authData): Promise<signUpRepoReturn> => {
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