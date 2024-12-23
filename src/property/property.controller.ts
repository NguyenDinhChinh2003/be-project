import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return 'This action returns all properties';
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
        return id;
    }

    @Post('create')
    //   @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    create(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) body: CreatePropertyDto) {
        return body;
    }

    @Put(':id/:name')
    update(@Param('id') id: string, @Param('name') name: string) {
        return [
            {
                id: id,
                name: name,
            },
        ];
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return id + ' ' + 'This action removes a property';
    }
}
