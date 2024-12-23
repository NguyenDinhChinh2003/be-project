import { IsInt, IsPositive } from "class-validator";

export class ParseIdPipe{
    @IsInt()
    @IsPositive()
    id: number;
}