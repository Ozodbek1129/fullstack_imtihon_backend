import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsBoolean()
    @IsNotEmpty()
    is_new: boolean;
    
    @IsOptional()
    @IsBoolean()
    is_like?: boolean;

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
