import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateShippingDto {
  @IsNumber()
  @IsNotEmpty()
  order_id: number;
  
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  phone_number: string;
}
