import { Module } from '@nestjs/common';
import { MenuRepositoryModule } from '@pizzaplay/menu-repository';
import { MenuService } from './services/menu.service';

@Module({
  imports: [MenuRepositoryModule],
  controllers: [],
  providers: [MenuService],
  exports: [MenuService],
})
export class MenuServiceModule {}
