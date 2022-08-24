import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidDataService } from './covid-data.service';

@NgModule({
  imports: [CommonModule],
  providers: [CovidDataService]
})
export class CoreModule {}
