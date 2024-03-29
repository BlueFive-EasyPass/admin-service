import { FastifyReply, FastifyRequest } from 'fastify'
import { Resource } from 'fastify-autoroutes'
import { InstanceManager } from '../instanceManager'
import { IController } from '../../interfaces/interfaceController'
import { Mid } from '../../application/mid'
import { IMid } from '../../interfaces/interfaceMid'
import { IDomain } from '../../interfaces/domainInterface'

export default () => <Resource>{
    get: {
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            const query = request.query as IDomain['data']
            const instanceManager = new InstanceManager(query);
            const controller: IController = instanceManager.getController();
            console.log(query)
            console.log(controller)

            try {
                await controller.Search(reply)

            } catch (error) {
                reply.code(500).send({ error: "Erro ao processar a requisição:" });
            }
        }
    },
    post: {
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            const data = request.body as IDomain['data']
            const mid = new Mid(data)
            const createHash: string = await mid.createHash()

            const userDataWithHash = {
                ...data,
                adm_senha: createHash
            }

            const instanceManager = new InstanceManager(userDataWithHash);
            const controller: IController = instanceManager.getController();

            try {
                await controller.Save(reply)
            } catch (error) {
                reply.code(500).send({ erro: "Erro ao processar a requisição" })
            }
        }
    },

    put: {
        url: '/:email',
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            const query = request.body as IDomain['data']
            const { email } = request.params as any

            const param = {
                adm_email: email
            }

            if (email === null || email === undefined || email === "") {
                reply.code(400).send({ erro: "Parametro enviado é inválido" })

            } else {
                const instanceManager = new InstanceManager(query);
                const controller: IController = instanceManager.getController();

                try {
                    console.log(param);
                    
                    await controller.Update(param, reply)

                } catch (error) {
                    reply.code(500).send({ erro: "Erro ao processar a requisição" })
                }
            }
        }
    },

    delete: {
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            const query = request.query as IDomain['data']
            const instanceManager = new InstanceManager(query);
            const controller: IController = instanceManager.getController();
            console.log(query)
            console.log(controller)

            try {
                await controller.Delete(reply)

            } catch (error) {
                reply.code(500).send({ error: "Erro ao processar a requisição:" });
            }
        }
    },
}
