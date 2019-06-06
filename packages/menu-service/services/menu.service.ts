import { Injectable } from '@nestjs/common';
import { MenuRepository } from '@pizzaplay/menu-repository';

@Injectable()
export class MenuService {
  constructor(private readonly menuRepository: MenuRepository) {

  }
  getHello(): string {
    return this.menuRepository.getHello();
  }
}
