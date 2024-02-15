import { IDomain } from "../interfaces/domainInterface";
import { IRepository } from "../interfaces/interfaceRepository";
import { IService } from "../interfaces/interfaceService";

export class Service implements IService {
    private repository: IRepository
    constructor(repository: IRepository) {
        this.repository = repository
    }

    save(data: IDomain['data']): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    search(data: IDomain['data']): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(data: IDomain['data'], arg1: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(data: IDomain['data']): Promise<any> {
        throw new Error("Method not implemented.");
    }

}