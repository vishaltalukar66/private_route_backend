import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { loginHandler } from "../handlers/loginHandler";
import { signUpHandler } from "../handlers/signUpHandler";
import { signUpSchema } from "../schema/signUpSchema";
import { loginSchemea } from "../schema/loginSchema";
import { jwtAuthHandler } from "../handlers/jwtAuthHandler";
import { confidentialDataHandler } from "../handlers/confidentialDataHandler";
import { logoutHandler } from "../handlers/logoutHandler";




export const authRoutes = async (server: FastifyInstance) => {

    const loginRoute = {
        schema: loginSchemea,
        handler: loginHandler
    }

    const signUpRoute = {
        schema: signUpSchema,
        handler: signUpHandler
    }

    const jwtAuth = {
        handler: jwtAuthHandler
    }
    const confidential = {
        handler: confidentialDataHandler
    }

    const logout = {
        handler: logoutHandler
    }

    // Route initialize
    server.post('/login', loginRoute);

    server.post('/signup', signUpRoute);

    server.post('/auth', jwtAuth);

    server.post('/confi', confidential);

    server.post('/logout', logout);




}