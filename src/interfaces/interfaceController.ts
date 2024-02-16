import { FastifyReply } from "fastify"

export interface IController {
    Login(reply: FastifyReply): Promise<void>
    Save(reply: FastifyReply): Promise<void>
    Search(reply: FastifyReply): Promise<void>
    Update(arg0: Object, reply: FastifyReply): Promise<void>
    Delete(reply: FastifyReply): Promise<void>
}