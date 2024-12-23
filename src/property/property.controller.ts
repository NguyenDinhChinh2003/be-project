import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'This action returns all properties';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }

  @Post('create')
  create() {
    return 'This action adds a new property';
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
    return id + 'This action removes a property';
  }
}
