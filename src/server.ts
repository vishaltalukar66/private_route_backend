import fastify from 'fastify'
import cors from '@fastify/cors'
import { authRoutes } from './routes/authRoutes';
import cookie, { FastifyCookieOptions } from '@fastify/cookie'

export const runServer = async () => {
    const server = fastify()
    server.register(cors, {
        // put your options here
        origin: [true],
        credentials: true,
        methods: ["GET", "POST"]
    })
    // Register routes
    await server.register(authRoutes);

    server.register(cookie, {
        secret: "my-secret", // for cookies signature
        parseOptions: {}     // options for parsing cookies
    } as FastifyCookieOptions)

    server.listen({ port: 8080 }, (err, address) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`Server listening at ${address}`)
    })
}