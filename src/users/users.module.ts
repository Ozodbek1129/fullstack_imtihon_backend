import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Order } from 'src/orders/orders.model';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [SequelizeModule.forFeature([User, Order]), 
  JwtModule.register({
    secret: process.env.JWT_SECRET || 'Ozodbek1129',
    signOptions: { expiresIn: '10h' },
  }),],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
