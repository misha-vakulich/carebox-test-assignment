import { Component, Input } from '@angular/core';
import { IStateCase } from 'packages/core/src/lib/models';

@Component({
  selector: 'carebox-covid-daily-item',
  templateUrl: './covid-daily-item.component.html',
  styleUrls: ['./covid-daily-item.component.css'],
})
export class CovidDailyItemComponent {
  @Input() public item!: IStateCase;
  public constructor() {}


}
