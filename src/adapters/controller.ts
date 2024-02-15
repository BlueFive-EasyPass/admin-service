import { FastifyReply, RawServerDefault, RouteGenericInterface, FastifySchema, FastifyTypeProviderDefault } from "fastify";
import { IncomingMessage, ServerResponse } from "http";
import { IController } from "../interfaces/interfaceController";
import { IDomain } from "../interfaces/domainInterface";
import { IMid } from "../interfaces/interfaceMid";

export class Controller implements IController {
    private domain: IDomain
    private mid: IMid
    
    constructor(domain: IDomain, mid: IMid) {
        this.domain = domain
        this.mid = mid
    }

    Save(reply: FastifyReply) {
        throw new Error("Method not implemented.");
    }
    Search(reply: FastifyReply) {
        throw new Error("Method not implemented.");
    }
    Update(arg0: any, reply: FastifyReply) {
        throw new Error("Method not implemented.");
    }
    Delete(reply: FastifyReply) {
        throw new Error("Method not implemented.");
    }
}