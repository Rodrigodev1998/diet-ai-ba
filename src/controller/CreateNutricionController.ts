import { FastifyReply, FastifyRequest } from "fastify";
import { CreateNutricionService } from "../service/CreateNutricionService";

 export interface DataProps{
    name: string;
    weight: string;
    height: string;
    age: string;
    gender: string;
    objective: string;
    level: string;
}

class CreateNutricionController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {
            name,
            weight,
            height,
            age,
            gender,
            objective,
            level
        } = request.body as DataProps;
        const create = new CreateNutricionService();
        const nutricion = await create.execute({
            name,
            weight,
            height,
            age,
            gender,
            objective,
            level
        });
        reply.send(nutricion);
    }
}

export { CreateNutricionController }