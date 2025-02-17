import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Order } from 'src/orders/orders.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Order])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
