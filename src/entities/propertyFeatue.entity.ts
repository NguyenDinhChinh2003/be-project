import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity()
export class PropertyFeature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bedroom: number;

    @Column()
    bathroom: number;

    @Column()
    parkingSpots: number;

    @Column()
    area: number;

    @Column()
    hasSwimmingPool: boolean;

    @Column()
    hasGardenYard: boolean;

    @Column()
    hasBalcony: boolean;

    @Column()
    propertyId: number;

    @OneToOne(()=>Property, (property) => property.propertyFeature, {cascade: true})
    @JoinColumn()
    property: Property;
}