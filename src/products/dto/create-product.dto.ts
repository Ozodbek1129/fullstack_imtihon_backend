import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsBoolean()
    @IsNotEmpty()
    is_new: boolean;

    @IsString()
    @IsNotEmpty()
    date: string;

    @IsNumber()
    @IsNotEmpty()
    category_id: number;

    @IsString()
    @IsNotEmpty()
    image?: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;
}
