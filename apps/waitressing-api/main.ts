import { NestFactory } from '@nestjs/core';
import { WaitressingApiModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(WaitressingApiModule);
  await app.listen(3000);
}
bootstrap();
