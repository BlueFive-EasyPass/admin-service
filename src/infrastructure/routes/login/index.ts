import { FastifyReply, FastifyRequest } from 'fastify'
import { Resource } from 'fastify-autoroutes'
import { IController } from '../../../interfaces/interfaceController'
import { InstanceManager } from '../../instanceManager'
import { IDomain } from '../../../interfaces/domainInterface'

export default () => <Resource>{
    post: {
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            const data = request.body as IDomain['data']
            
            const instanceManager = new InstanceManager(data);
            const controller: IController = instanceManager.getController();

            try {
                await controller.Login(reply)
            } catch (error) {
                reply.code(500).send({ error: "Erro ao processar a requisição:" });
            }
        }
    }
}
