import { FastifyReply, FastifyRequest } from "fastify";
import { signUpService } from "../services/signUpService";
import { authData } from "../interfaces/authData";

export const signUpHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const data = request.body as authData;
        const response = await signUpService(data);

        if (response.success) {
            reply.status(200).send(response)
        }
        else {
            reply.status(400).send(response)
        }
    } catch (error) {
        reply.status(400).send({

            success: false,
            username: "Some Error try after some time, Contact Admin"


        })
    }



}