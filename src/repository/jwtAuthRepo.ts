import { jwtAuthRepoReturn } from "../interfaces/returnType/jwtAuthRepoReturn";
import { loginReturn } from "../interfaces/returnType/loginReturn";
import { User } from "../models/userModel";

export const jwtAuthRepo = async (payload: loginReturn): Promise<jwtAuthRepoReturn> => {
    try {

        await User.findOne({ _id: payload.mongoID });
        return {
            success: true
        }

    } catch (error) {
        console.log('\n\n inside jwtauthreppo - > ');
        return {
            success: false
        }
    }
}