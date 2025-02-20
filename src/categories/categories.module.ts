import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Categories } from './categories.model';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [SequelizeModule.forFeature([Categories]), ProductsModule,],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
