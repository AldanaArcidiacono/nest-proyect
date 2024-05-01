import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  // Query,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsServices: ProductsService) {}

  @Get('')
  getProds() {
    // @Query('brand') brand: string, // @Query('offset') offset: number = 0, // @Query('limit') limit: number = 100,
    return this.productsServices.findAll();
  }

  @Get('text')
  getProductsFilter() {
    return { message: 'This is a verif text of products' };
  }

  @Get(':prodId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProd(@Param('prodId') prodId: string) {
    return this.productsServices.findOne(+prodId);
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsServices.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return this.productsServices.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsServices.delete(+id);
  }
}
