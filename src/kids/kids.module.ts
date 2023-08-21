import { Module } from '@nestjs/common';
import { KidsController } from './kids.controller';

@Module({
  controllers: [KidsController]
})
export class KidsModule {}
