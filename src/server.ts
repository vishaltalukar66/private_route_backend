import fastify from 'fastify'
import cors from '@fastify/cors'
import { authRoutes } from './routes/authRoutes'

export const runServer = () => {
    const server = fastify()
    server.register(cors, {
        // put your options here
        origin: '*',
        methods: ["GET", "POST"]
    })
    server.get('/ping', async (request, reply) => {
        return 'pong\n'
    })

    server.register(authRoutes);

    server.listen({ port: 8080 }, (err, address) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`Server listening at ${address}`)
    })
}