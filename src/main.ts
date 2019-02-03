import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { RolesGuard } from './common/guards/roles.guard';
import { Reflector } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  // 如果全局错误
  // app.useGlobalGuards(new RolesGuard(new Reflector()));

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
