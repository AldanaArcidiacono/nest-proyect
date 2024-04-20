import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new')
  newEndpoint(): string {
    return 'New endpoint';
  }

  @Get('product/:prodId')
  getProd(@Param('prodId') prodId: string): string {
    return `Product id: ${prodId}`;
  }

  @Get('category/:id/products/:prodId')
  getCategories(
    @Param('id') id: string,
    @Param('prodId') prodId: string,
  ): string {
    return `Product id: ${prodId} from category: ${id}`;
  }
}
