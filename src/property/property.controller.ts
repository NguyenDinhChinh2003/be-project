import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { parseIdPipe } from './pipes/parseIdppipe';
import { zodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return 'This action returns all properties';
    }

    // @Get(':id')
    // findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    //     return id;
    // }

    @Post('create')
    //   @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))

    @UsePipes(new zodValidationPipe(createPropertySchema))
    create(
        @Body() body: CreatePropertyZodDto) {
        return body;
    }

    @Patch(':id')
    update(
        @Param("id", parseIdPipe) id,
        @Body() body: CreatePropertyDto
    ) {
        return body;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return id + ' ' + 'This action removes a property';
    }
}
