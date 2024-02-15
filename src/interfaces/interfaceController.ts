import { FastifyReply } from "fastify"

export interface IController {
    Save(reply: FastifyReply): Object
    Search(reply: FastifyReply): Object
    Update(arg0: Object, reply: FastifyReply): Object
    Delete(reply: FastifyReply): Object
}