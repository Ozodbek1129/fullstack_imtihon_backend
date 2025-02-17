import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order_items/order_items.module';
import { ShippingModule } from './shipping/shipping.module';
import { CartModule } from './cart/cart.module';
import { PaymentsModule } from './payments/payments.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'imtixon_oxirgi_oy',
      autoLoadModels: true,
      // synchronize: true,
    }),
    
    UsersModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    OrderItemsModule,
    ShippingModule,
    CartModule,
    PaymentsModule,
    WishlistModule,
    ReviewsModule,
  ],

})
export class AppModule {}
