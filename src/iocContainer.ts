import * as awilix from "awilix";
import dotenv from "dotenv";
import { MongooseConnection } from "./MongooseConnection";

dotenv.config();

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
});

container.register({
    mongooseConnection: awilix.asClass(MongooseConnection).classic(),
    connection: awilix.asValue(process.env.MONGO_CONNECTION)
});

export default container;
