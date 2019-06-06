import { Module } from '@nestjs/common';
import { MenuRepositoryModule } from '@pizzaplay/menu-repository';
import { MenuService } from './services/menu.service';
import { IOC_KEY } from 'packages/commons';

@Module({
  imports: [MenuRepositoryModule],
  controllers: [],
  providers: [MenuService[IOC_KEY]],
  exports: [MenuService[IOC_KEY].provide],
})
export class MenuServiceModule {}
