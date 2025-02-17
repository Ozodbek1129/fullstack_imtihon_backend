import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Order } from './orders.model';

@Module({
  imports: [SequelizeModule.forFeature([Order, User])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
