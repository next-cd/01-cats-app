import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { DogController} from './dog.controller';
import { CatsService } from './cats.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../common/guards/roles.guard';

@Module({
  controllers: [CatsController, DogController],
  providers: [CatsService, 
    RolesGuard,
  //   {
  //   provide: APP_GUARD,
  //   useClass: RolesGuard,
  // }
],
})
export class CatsModule {}
