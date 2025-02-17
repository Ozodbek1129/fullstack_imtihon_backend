import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
    @IsNumber()
    @IsNotEmpty()
    user_id: number;
    
    @IsNumber()
    @IsNotEmpty()
    total_price: number;

    @IsString()
    @IsNotEmpty()
    status: string;

}
