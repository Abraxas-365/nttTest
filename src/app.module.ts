import { Module } from '@nestjs/common';
import { FechasModule } from './fechas/fechas.module';

@Module({
  imports: [FechasModule],
})
export class AppModule { }
