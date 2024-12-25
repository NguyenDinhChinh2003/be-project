import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as path from 'path';

export default (): PostgresConnectionOptions => ({
    url: process.env.DATABASE_URL,
    type: 'postgres',
    port: +process.env.PORT_DB,
    entities: [path.resolve(__dirname, "..") + '/**/*.entity{.ts,.js}'],
    synchronize: false,
});