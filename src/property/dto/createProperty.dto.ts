import { IsInt, IsPositive, IsString, Length } from 'class-validator';
import { group } from 'console';

export class CreatePropertyDto {
    @IsString({always: true})
    @Length(2, 10, { message: 'Name is too short or too long' })
    name: string;
    @IsString()
    @Length(2, 20, { groups: ['create'] })
    @Length(2, 15, { groups: ['update'] })
    description: string;

    @IsInt({always: true})
    @IsPositive({ message: 'Price must be a positive number' })
    price: number;
}