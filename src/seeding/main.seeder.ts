import { Property } from "../entities/property.entity";
import { PropertyType } from "../entities/propertyType.entity";
import { User } from "../entities/user.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { faker } from '@faker-js/faker';
import { PropertyFeature } from "../entities/propertyFeatue.entity";

export class MainSeeder implements Seeder {
    public async run(dataSouce: DataSource, factoryManager: SeederFactoryManager):
        Promise<void> {
        const typeRepo = dataSouce.getRepository(PropertyType);
        const propertyType = await typeRepo.save([
            { value: 'House' },
            { value: 'Apartment' },
        ]);

        const UserFactory = factoryManager.get(User);
        const PropertyFeatureFactory = factoryManager.get(PropertyFeature);
        const users = await UserFactory.saveMany(10);

        const PropertyFactory = factoryManager.get(Property);
        const properties = await Promise.all(
            Array(50).fill("").map(async () => {
                const property = PropertyFactory.make(
                    {
                        user: faker.helpers.arrayElement(users),
                        type: faker.helpers.arrayElement(propertyType),
                        propertyFeature: await PropertyFeatureFactory.save()
                    });
                return property;
            }),
        );
        const propertyRepo = dataSouce.getRepository(Property);
        await propertyRepo.save(properties);
    }
}