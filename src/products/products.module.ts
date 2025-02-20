import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from './product.model';
import { Order_items } from 'src/order_items/order_items.model';
import { Cart } from 'src/cart/cart.model';
import { Reviews } from 'src/reviews/reviews.model';
import { Wishlist } from 'src/wishlist/wishlist.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Products,
      Order_items,
      Cart,
      Reviews,
      Wishlist,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService,],
  exports: [ProductsService,]
})
export class ProductsModule {}
