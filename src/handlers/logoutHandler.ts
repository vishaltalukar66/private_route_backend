import { FastifyReply, FastifyRequest } from "fastify"

export const logoutHandler = (request: FastifyRequest, reply: FastifyReply) => {
    try {
        reply.clearCookie('private').send({
            success: true
        });
    } catch (error) {
        reply.send({
            success: false,
            message: "Some Error try after some time, Contact Admin"
        })
    }
}