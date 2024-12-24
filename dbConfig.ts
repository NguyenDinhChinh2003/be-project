import { Property } from "src/entities/property.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig: PostgresConnectionOptions = {
    // don't put this here, put it in the .env file
    url: 'postgresql://nestDB_owner:WkxYPsHQ7tp3@ep-royal-mouse-a5zhvr51.us-east-2.aws.neon.tech/nestDB?sslmode=require',
    type: 'postgres',
    port: 3306,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
};