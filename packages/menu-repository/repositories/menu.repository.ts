import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuRepository {
  getHello(): string {
    return 'Hello World!';
  }
}
