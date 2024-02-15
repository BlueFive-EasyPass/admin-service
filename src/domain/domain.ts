import { IDomain } from "../interfaces/domainInterface";
import { IService } from "../interfaces/interfaceService";

export class Domain implements IDomain {
    data: IDomain['data'];
    private service: IService
    constructor(data: IDomain['data'], service: IService) {
        this.data = data
        this.service = service
    }
    
    save() {
        throw new Error("Method not implemented.");
    }
    search() {
        throw new Error("Method not implemented.");
    }
    update(arg0: any) {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
}