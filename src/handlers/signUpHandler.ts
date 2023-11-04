import { FastifyReply, FastifyRequest } from "fastify";

export const signUpHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ succes: true, location: 'signup' });
    console.log(request.body);
}