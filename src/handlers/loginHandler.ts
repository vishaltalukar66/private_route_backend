import { FastifyReply, FastifyRequest } from "fastify";
import { loginService } from "../services/loginService";
import { authData } from "../interfaces/authData";
import { loginReturn } from "../interfaces/returnType/loginReturn";

export const loginHandler = async (request: FastifyRequest, reply: FastifyReply) => {

    try {
        //extract data from request body
        const data = request.body as authData;

        const response = await loginService(data) as loginReturn;

        if (response.success) {
            //extract jwt token and set cookie
            const jwt = String(response.JWT);
            reply.setCookie('private', jwt, {
                httpOnly: true,
                expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
                sameSite: "none",
                secure: 'auto',
            }).send(response);

        }
        else {
            reply.status(400).send(response);
        }

    } catch (error) {
        reply.status(400).send({

            success: false,
            message: "Some Error try after some time, Contact Admin"


        })
    }
}