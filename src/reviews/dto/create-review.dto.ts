import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReviewDto {
    @IsNumber()
    @IsNotEmpty()
    user_id: number;
    
    @IsNumber()
    @IsNotEmpty()
    product_id: number;

    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @IsString()
    @IsNotEmpty()
    comment: string;



}
