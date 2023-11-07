import { loginReturn } from "./returnType/loginReturn";

export interface JWTDecode {
    exp: number;
    data: loginReturn;
    iat: number;
}