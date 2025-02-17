import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCartDto {
    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    product_id: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    
}
