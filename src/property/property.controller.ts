import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { parseIdPipe } from './pipes/parseIdppipe';
import { zodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';


interface Service {
    findAll(): any;
    findOne(): any;
    create(): any;
    update(): any;
    remove(): any;
}

@Controller('property')
export class PropertyController {
    propertyService: PropertyService;
    constructor(propertyService: PropertyService) {
        this.propertyService = propertyService;
    }


    @Get()
    findAll() {
        return this.propertyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
        return this.propertyService.findOne(id);
    }

    @Post('create')
    @UsePipes(new zodValidationPipe(createPropertySchema))
    create(@Body() dto: CreatePropertyDto) {
        return this.propertyService.create(dto);
    }

    @Patch(':id')
    update(
        @Param("id", parseIdPipe) id,
        @Body() body: UpdatePropertyDto
    ) {
        return this.propertyService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return this.propertyService.delete(id);
    }
}
