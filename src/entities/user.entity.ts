import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Property } from "./property.entity";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    avatarUrl: string;

    @CreateDateColumn()
    created_at: Date;


    @OneToMany(() => Property, (property) => property.user)
    @JoinColumn()
    properties: Property[];
}
