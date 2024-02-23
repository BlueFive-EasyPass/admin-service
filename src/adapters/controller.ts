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

    async Login(reply: FastifyReply): Promise<void> {
        try {

            const result: any = await this.domain.login()
            
            if (result) {
            console.log(result);
            
                    let compareHash = await this.mid.compareHash(result[0].adm_senha)
                    if (compareHash) {
                        let token = await this.mid.createToken()
                        reply.code(200).send({ data: token });
                    }
                    reply.code(500).send({ error: 'Erro ao logar1' });
            }

            reply.code(500).send({ error: 'Erro ao logar' });
        } catch (error) {
            reply.code(500).send({ error: error });
            throw error;
        }
    }

    async Save(reply: FastifyReply): Promise<void> {
        try {
            const result = await this.domain.save();

            if (result) {
                reply.code(200).send({ data: result });
            }
            reply.code(500).send({ error: 'Erro ao salvar no banco' });
        } catch (error) {
            reply.code(500).send({ error: error });
            throw error;
        }
    }

    async Search(reply: FastifyReply): Promise<void> {
        try {
            const result = await this.domain.search();

            if (result) {
                reply.code(200).send({ data: result });
            }
            reply.code(500).send({ error: 'Erro ao buscar no banco' });
        } catch (error) {
            reply.code(500).send({ error: error });
            throw error;
        }
    }
    async Update(arg0: Object, reply: FastifyReply): Promise<void> {
        try {
            const result = await this.domain.update(arg0);

            if (result) {
                reply.code(200).send({ data: `${result} item alterado no Banco de Dados` });
            }
            reply.code(500).send({ error: 'Erro ao atualizar no banco' });
        } catch (error) {
            reply.code(500).send({ error: error });
            throw error;
        }
    }


    async Delete(reply: FastifyReply): Promise<void> {
        try {
            const result = await this.domain.delete();

            if (result) {
                reply.code(200).send({ data: `${result} item excluido no Banco de Dados` });
            } else {
                reply.code(500).send({ error: 'Erro ao excluir do banco' });
            }
        } catch (error) {
            reply.code(500).send({ error: error });
            throw error;
        }
    }

}
