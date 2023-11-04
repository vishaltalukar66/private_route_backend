import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { loginHandler } from "../handlers/loginHandler";
import { signUpHandler } from "../handlers/signUpHandler";
import { signUpSchema } from "../schema/signUpSchema";
import { loginSchemea } from "../schema/loginSchema";



export const authRoutes = async (server: FastifyInstance) => {

    const loginRoute = {
        schema: loginSchemea,
        handler: loginHandler
    }

    const signUpRoute = {
        schema: signUpSchema,
        handler: signUpHandler
    }

    server.post('/login', loginRoute);

    server.post('/signup', signUpRoute);



}