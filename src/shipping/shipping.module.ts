import { Module } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { ShippingController } from './shipping.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shipping } from './shipping.model';

@Module({
  imports: [SequelizeModule.forFeature([Shipping])],
  controllers: [ShippingController],
  providers: [ShippingService],
})
export class ShippingModule {}
