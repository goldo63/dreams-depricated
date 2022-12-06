import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from './moduleconfig/config.module';

@NgModule({
  imports: [CommonModule],
  exports: [ConfigModule]
})
export class UtilityModule {}
