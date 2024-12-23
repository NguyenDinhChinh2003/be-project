import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    async findAll() {
        return 'This action returns all cats';
    }
    async findOne(id: number) {
        return `This action returns a ${id} cat`;
    }
    async create() {
        return 'This action adds a new cat';
    }
    async update(id: number) {
        return `This action updates a ${id} cat`;
    }
    async remove(id: number) {
        return `This action remove a ${id} cat`;
    }
}
