import { Module } from '@nestjs/common';
import { MenuRepository } from './repositories/menu.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [MenuRepository],
  exports: [MenuRepository],
})
export class MenuRepositoryModule {}
