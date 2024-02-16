import { Model } from "sequelize";
import { IDomain } from "../interfaces/domainInterface";
import { IModelDB } from "../interfaces/interfaceModel";
import { IRepository } from "../interfaces/interfaceRepository";

export class Repository implements IRepository {
    private modelDB: IModelDB

    constructor(modelDB: IModelDB) {
        this.modelDB = modelDB
    }


    async save(data: IDomain['data']): Promise<Object> {
        try {
            const model = await this.modelDB.syncModel();

            const result = await model.create({ ...data })

            return result;
        } catch (error) {
            throw error;
        } finally {
            this.modelDB.disconnectModel();
        }
    }

    search(data: IDomain['data']): Promise<Object[]> {
        try {
            return Promise.resolve([{ success: 'ok' }]);
        } catch (error) {
            throw error;
        } finally {
            this.modelDB.disconnectModel();
        }
    }    
    

    update(data: IDomain['data'], arg0: Object): Promise<Object> {
        try {

            return Promise.resolve({ success: 'ok' });

        } catch (error) {
            throw error
        } finally {
            this.modelDB.disconnectModel();
        }
    }

    login(data: IDomain['data']): Promise<Object> {
        try {

            return Promise.resolve({ success: 'ok' });
        } catch (error) {
            throw error
        } finally {
            this.modelDB.disconnectModel();
        }
    }

    delete(data: IDomain['data']): Promise<Object> {
        try {

            return Promise.resolve({ success: 'ok' });
        } catch (error) {
            throw error
        } finally {
            this.modelDB.disconnectModel();
        }
    }
}