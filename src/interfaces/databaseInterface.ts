import { Sequelize } from "sequelize"

export interface IDatabaseConnection {
   Connect: () => void
   Disconnect: () => void
   getInstance: () => Sequelize
}