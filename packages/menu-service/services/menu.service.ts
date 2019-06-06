import { Injectable } from '@nestjs/common';
import { MenuRepository } from '@pizzaplay/menu-repository';
import { IMenuService } from './menu.service.interface';
import { IOC_KEY } from 'packages/commons';
import { ClassProvider } from '@nestjs/common/interfaces';

@Injectable()
export class MenuService implements IMenuService {
    static get [IOC_KEY](): ClassProvider {
      return {
        provide: IMenuService.name,
        useClass: MenuService,
      };
    }

  constructor(private readonly menuRepository: MenuRepository) {

  }

  getHello(): string {
    return this.menuRepository.getHello();
  }
}
