import { IModelDB } from "../interfaces/interfaceModel";
import { IRepository } from "../interfaces/interfaceRepository";

export class Repository implements IRepository {
    private modelDB: IModelDB
    constructor(modelDB: IModelDB) {
        this.modelDB = modelDB
    }
    save(data: { bussines_buss_CNPJ: string; list_tipo: string; list_CPF: string; }): Promise<any> {
        throw new Error("Method not implemented.");
    }
    get(data: { bussines_buss_CNPJ: string; list_tipo: string; list_CPF: string; }): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(data: { bussines_buss_CNPJ: string; list_tipo: string; list_CPF: string; }, arg1: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(bussinesData: { bussines_buss_CNPJ: string; list_tipo: string; list_CPF: string; }): Promise<any> {
        throw new Error("Method not implemented.");
    }
}