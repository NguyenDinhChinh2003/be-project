import { Injectable, NotFoundException } from "@nestjs/common";
import { Property } from "../entities/property.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePropertyDto } from "./dto/createProperty.dto";
import { NotFoundError } from "rxjs";
import { UpdatePropertyDto } from "./dto/updateProperty.dto";

@Injectable()
export class PropertyService {

    constructor(
        @InjectRepository(Property)
        private propertyRepo: Repository<Property>
    ) { }

    async findAll() {

    }
    async findOne(id: number) {
        const result = await this.propertyRepo.findOne({
            where: { id }
        });
        if (!result) throw new NotFoundException();
        return result;
    }
    async create(dto: CreatePropertyDto) {
        return await this.propertyRepo.save(dto);
    }
    async update(id: number, dto: UpdatePropertyDto) {
        return await this.propertyRepo.update({ id }, dto);
    }

    async delete(id: number) {
        return await this.propertyRepo.delete({ id });
    }
}