import { Module } from '@nestjs/common';
import { MenuWebController } from './controllers/menu.webcontroller';
import { MenuServiceModule } from '@pizzaplay/menu-service';

@Module({
  imports: [MenuServiceModule],
  controllers: [MenuWebController],
  providers: [],
})
export class MenuWebModule {}
