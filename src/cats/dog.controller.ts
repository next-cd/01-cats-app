import {
  Controller,
  Get,
} from '@nestjs/common';

@Controller('dog')
export class DogController {

  @Get()
  async findAll()  {
    return '121212';
  }
}
