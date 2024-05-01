import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../types/Products';

@Injectable()
export class ProductsService {
  private counterId = 3;
  // In this example we are using an array with the data instead of a DB
  private products: Product[] = [
    {
      id: 1,
      name: 'Argentinian Mate',
      description: 'A beautiful mate',
      price: 25,
      stock: 5,
      img: '',
    },
    {
      id: 2,
      name: 'Facturas',
      description: 'A delicious argentinian breakfast',
      price: 12,
      stock: 5,
      img: '',
    },
    {
      id: 3,
      name: 'Fernet',
      description: 'A tasty argentinian drink',
      price: 20,
      stock: 5,
      img: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const prod = this.products.find((el) => el.id === id);
    if (!prod) throw new NotFoundException(`Prod with id: ${id}, Not Found`);
    return prod;
  }

  create(payload: any) {
    this.counterId++;

    const newProd = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProd);
    return newProd;
  }

  update(id: number, payload: any) {
    const prodToEdit = this.findOne(id);
    if (!prodToEdit) return null;

    const index = this.products.findIndex((el) => el.id === id);
    this.products[index] = { ...prodToEdit, ...payload };

    return this.products[index];
  }

  delete(id: number) {
    const index = this.products.findIndex((el) => el.id === id);

    // findIndex returns -1 if does not find the element
    if (index === -1)
      throw new NotFoundException(`Prod with id: ${id}, Not Found`);

    this.products.splice(index, 1);
    return this.products;
  }
}
