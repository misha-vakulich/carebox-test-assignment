import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@carebox/core';
import { CovidDailyComponent, CovidItemDirective } from './covid-daily/covid-daily.component';
import { CovidDailyItemComponent } from './covid-daily-item/covid-daily-item.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [CovidDailyItemComponent, 
    CovidDailyComponent, 
    CovidItemDirective
  ],
  exports: [CovidDailyItemComponent, 
    CovidDailyComponent, 
    CovidItemDirective
  ],
})
export class CoreLayoutModule {}
