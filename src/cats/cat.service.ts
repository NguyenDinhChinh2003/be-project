import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
@Injectable() 
export class catSerivce{
    constructor(
        @InjectRepository(cat) private propertyRepo: Repository<cat>,
    ){};
}