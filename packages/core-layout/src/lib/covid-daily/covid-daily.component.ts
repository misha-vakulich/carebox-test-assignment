import { AfterContentInit, Component, ContentChild, Directive, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CovidDataService } from 'packages/core/src/lib/covid-data.service';
import { IUSStateCovidData } from 'packages/core/src/lib/models';
import { Observable, of } from 'rxjs';


@Directive({
  selector: "[careboxStateItem]"
})
export class CovidItemDirective {
  constructor(public templateRef: TemplateRef<any>) {
    console.log('directive called')
  }
}

@Directive({
  selector: "[careboxStateList]"
})
export class CovidListDirective {
  constructor(public templateRef: TemplateRef<any>) {
    console.log('directive called')
  }
}



@Component({
  selector: 'carebox-covid-daily',
  templateUrl: './covid-daily.component.html',
  styleUrls: ['./covid-daily.component.css'],
})
export class CovidDailyComponent implements OnInit, AfterContentInit {

  @ContentChild(CovidItemDirective, {descendants: true}) 
  public item?: CovidItemDirective;

  @ContentChild(CovidListDirective, {descendants: true}) 
  public list?: CovidItemDirective;


  public covidData$: Observable<IUSStateCovidData> = of();
  public constructor(private covidDataService: CovidDataService) {}


  ngOnInit(): void {
    this.covidData$ = this.covidDataService.getUSData();
  }

  ngAfterContentInit(): void {
    console.log(this.item);
  }
}
