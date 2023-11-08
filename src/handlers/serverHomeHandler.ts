import { FastifyReply, FastifyRequest } from "fastify";

export const serverHomeHandler = async (request: FastifyRequest, reply: FastifyReply) => {

    reply.send(` Server is running
                HostName : ${request.hostname}
                IP : ${request.ip}
`)

}