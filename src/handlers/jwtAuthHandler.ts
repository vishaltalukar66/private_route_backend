import { FastifyReply, FastifyRequest } from "fastify";
import { jwtAuthService } from "../services/jwtAuthService";

export const jwtAuthHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {

        const response = await jwtAuthService(request);
        if (response.success) {
            reply.send(response);
        }
        else {
            reply.status(400).send(response)
        }



    } catch (error) {
        reply.status(400).send({
            success: false,
            message: "Some Error try after some time, Contact Admin"
        })
    }


}