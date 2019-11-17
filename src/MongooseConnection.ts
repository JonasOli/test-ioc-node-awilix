import mongoose from "mongoose";

export class MongooseConnection {
    constructor(private connection: string) {
        this.connection = connection;
        this.connect();
    }

    connect() {
        mongoose.connect(this.connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}
