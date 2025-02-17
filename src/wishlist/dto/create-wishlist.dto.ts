import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateWishlistDto {
    @IsNumber()
    @IsNotEmpty()
    product_id: number

    @IsNumber()
    @IsNotEmpty()
    user_id: number
}
