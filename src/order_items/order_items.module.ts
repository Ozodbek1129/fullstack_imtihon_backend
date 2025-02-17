import { Module } from '@nestjs/common';
import { OrderItemsService } from './order_items.service';
import { OrderItemsController } from './order_items.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order_items } from './order_items.model';
import { User } from 'src/users/users.model';

@Module({
  imports: [SequelizeModule.forFeature([Order_items, User])],
  controllers: [OrderItemsController],
  providers: [OrderItemsService],
})
export class OrderItemsModule {}
