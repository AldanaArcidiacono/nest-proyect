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
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('')
  getProds(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Return products from page ${limit} of ${offset} of the brand ${brand}`,
    };
  }

  @Get('text')
  getProductsFilter() {
    return { message: 'This is a verif text of products' };
  }

  @Get(':prodId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProd(@Param('prodId') prodId: string) {
    return { message: `Product id: ${prodId}` };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create Action',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { id, payload };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
