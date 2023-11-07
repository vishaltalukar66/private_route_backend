import { FastifyRequest, FastifyReply } from "fastify";
import { jwtAuthService } from "../services/jwtAuthService";
import { confidentialDataService } from "../services/confidentialDataService";

export const confidentialDataHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {

        const response = await confidentialDataService(request);
        if (response.success) {
            reply.status(200).send(response);
        }
        else {
            reply.status(401).send(response);
        }
    } catch (error) {
        reply.status(400).send({
            success: false,
            message: "Some Error try after some time, Contact Admin"
        })
    }

}