import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { parseIdPipe } from './pipes/parseIdppipe';
import { zodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { PropertyService } from './property.service';


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
    constructor(propertyService: Service) {
        this.propertyService = propertyService;
    }


    @Get()
    findAll() {
        return this.propertyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
        return this.propertyService.findOne();
    }

    @Post('create')
    @UsePipes(new zodValidationPipe(createPropertySchema))
    create(
        @Body() body: CreatePropertyZodDto) {
        return this.propertyService.create();
    }

    @Patch(':id')
    update(
        @Param("id", parseIdPipe) id,
        @Body() body: CreatePropertyDto
    ) {
        return this.propertyService.update();
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return id + ' ' + 'This action removes a property';
    }
}
