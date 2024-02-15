import { Model } from "sequelize";

export interface IModelDB {
    syncModel(): Promise<Model>;
    disconnectModel(): void;
}