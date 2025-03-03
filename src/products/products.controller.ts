import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseIntPipe, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
async getProducts(
  @Query('category_id') categoryId?: number,
  @Query('search') search?: string,
  @Query('page') page: number = 1,
  @Query('limit') limit: number = 10,
) {
  return this.productsService.findAll(categoryId ? Number(categoryId) : undefined, search, page, limit);
}

  
@Get("getAll")
getAll() {
  return this.productsService.findAll();
}


  @Get('category/:categoryId')
  findByCategory(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.productsService.findAll(categoryId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

  @Post(':id/image')
  @UseInterceptors(FileInterceptor('image', { storage: new UploadService().storage }))
  async uploadProductImage(@Param('id') productId: number, @UploadedFile() file: Express.Multer.File) {
    return this.productsService.updateImage(productId, file.filename);
  }
}
