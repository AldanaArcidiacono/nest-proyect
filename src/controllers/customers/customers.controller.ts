import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get('text')
  getProductsFilter() {
    return { message: 'This is a verif text of customers' };
  }
}
