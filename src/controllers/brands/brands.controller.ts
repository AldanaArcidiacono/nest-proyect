import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get('text')
  getProductsFilter() {
    return { message: 'This is a verif text of brands' };
  }
}
