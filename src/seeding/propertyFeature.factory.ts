import { PropertyFeature } from '../entities/propertyFeatue.entity';
import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';



export const PropertyFeatureFactory = setSeederFactory(PropertyFeature, (faker: Faker) => {
    const propertyFeature = new PropertyFeature();
    propertyFeature.bedroom = faker.number.int({min: 1, max: 3});
    propertyFeature.bathroom = faker.number.int({min: 1, max: 3});
    propertyFeature.parkingSpots = faker.number.int({min: 1, max: 3});
    propertyFeature.area = faker.number.int({min: 25, max: 2500});
    propertyFeature.hasSwimmingPool = faker.datatype.boolean();
    propertyFeature.hasGardenYard = faker.datatype.boolean();
    propertyFeature.hasBalcony = faker.datatype.boolean();
    return propertyFeature;
})