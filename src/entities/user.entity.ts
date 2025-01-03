import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, ManyToMany, JoinTable, BeforeInsert } from "typeorm";
import { Property } from "./property.entity";
import * as bcrypt from "bcrypt"

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
    hashedRefreshToken: string;

    @Column({default: 123})
    password: string;

    @Column()
    avatarUrl: string;

    @CreateDateColumn()
    created_at: Date;


    @OneToMany(() => Property, (property) => property.user)
    properties: Property[];

    @ManyToMany(() => Property, (property) => property.likedBy)
    @JoinTable({name: "user_like_properties"})
    likedProperties: Property[];

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10)
    }
}
