import { Injectable, Controller, Get } from '@nestjs/common';
import { MenuService } from '@pizzaplay/menu-service';

@Injectable()
@Controller('/menu')
export class MenuWebController {
  constructor(private readonly menuService: MenuService) {

  }

  @Get()
  getHello(): string {
    return this.menuService.getHello();
  }
}
