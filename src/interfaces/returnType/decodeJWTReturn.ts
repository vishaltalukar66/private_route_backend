import { loginReturn } from "./loginReturn";

export interface decodeJWTReturn {

    success?: boolean;
    payload?: loginReturn;

}