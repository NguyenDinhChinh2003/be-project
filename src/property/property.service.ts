import { Injectable, NotFoundException, Query } from "@nestjs/common";
import { Property } from "../entities/property.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePropertyDto } from "./dto/createProperty.dto";
import { UpdatePropertyDto } from "./dto/updateProperty.dto";
import { PaginationDto } from "./dto/pagianation.dto";
import { DEFAULT_PAGE_SIZE } from "src/utils/constans";

@Injectable()
export class PropertyService {

    constructor(
        @InjectRepository(Property)
        private propertyRepo: Repository<Property>
    ) { }

    async findAll(@Query() paginatuionDto: PaginationDto) {
        return await this.propertyRepo.find({
            skip: paginatuionDto.skip,
            take: paginatuionDto.limit ?? DEFAULT_PAGE_SIZE
        }
        );
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