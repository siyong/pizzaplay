import { Injectable, Controller, Get } from '@nestjs/common';
import { IMenuService } from '@pizzaplay/menu-service';

@Injectable()
@Controller('/menu')
export class MenuWebController {
  constructor(private readonly menuService: IMenuService) {

  }

  @Get()
  getHello(): string {
    return this.menuService.getHello();
  }
}
