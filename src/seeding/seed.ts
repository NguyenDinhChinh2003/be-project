import  dbConfig  from "../config/db.config";
import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import { PropertyFactory } from "./property.factory";
import { PropertyFeatureFactory } from "./propertyFeature.factory";
import { UserFactory } from "./user.factory";
import { MainSeeder } from "./main.seeder";

const options :DataSourceOptions & SeederOptions = {
    ...dbConfig(),
    factories: [PropertyFactory, PropertyFeatureFactory, UserFactory],
    seeds: [MainSeeder],
}

const dataSouce = new DataSource(options);
dataSouce.initialize().then(async () => {
    await dataSouce.synchronize(true);
    await runSeeders(dataSouce);   
    process.exit();
});