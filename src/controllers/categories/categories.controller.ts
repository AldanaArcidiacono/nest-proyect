import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('text')
  getProductsFilter() {
    return { message: 'This is a verif text of categories' };
  }

  @Get(':id/products/:prodId')
  getCategories(@Param('id') id: string, @Param('prodId') prodId: string) {
    return { message: `Product id: ${prodId} from category: ${id}` };
  }
}
