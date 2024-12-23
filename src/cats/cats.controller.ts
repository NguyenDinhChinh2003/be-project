import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    catsService: CatsService;
    constructor(catsService: CatsService) {
        this.catsService = catsService;
    }

    @Get()
    findAll(){
        return this.catsService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string){
        return this.catsService.findOne(Number(id));
    }

    @Post()
    create(){
        return this.catsService.create();
    }

    @Patch('/:id')
    update(@Param('id') id: string){
        return this.catsService.update(Number(id));
    }

    @Delete('/:id')
    remove(@Param('id') id: string){
        return this.catsService.remove(Number(id));
    }
}
