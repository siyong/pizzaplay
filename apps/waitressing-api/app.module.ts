import { Module } from '@nestjs/common';
import { MenuWebModule } from '@pizzaplay/menu-web';

@Module({
  imports: [MenuWebModule],
  controllers: [],
  providers: [],
})
export class WaitressingApiModule {}
