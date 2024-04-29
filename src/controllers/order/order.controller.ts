import { Controller, Get } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get('text')
  getProductsFilter() {
    return { message: 'This is a verif text of order' };
  }
}
