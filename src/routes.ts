import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { CreateNutricionController } from "./controller/CreateNutricionController";

export async function routes(fastify:FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/information", (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutricionController().handle(request, reply)
    })
}