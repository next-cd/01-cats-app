import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  // readonly name: string;
  // readonly age: number;
  // readonly breed: string;
  private readonly cats: Cat[] = [
    {name: 'cd', age: 10, breed: '23232' },
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat[]{
    return this.cats.filter((item) => item.age === id)
  }
}
