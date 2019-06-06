import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuEntity {
  getHello(): string {
    return 'Hello World!';
  }
}
