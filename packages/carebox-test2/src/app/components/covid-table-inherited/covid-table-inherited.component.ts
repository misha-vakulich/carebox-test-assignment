import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import {CovidDailyComponent} from '@carebox/core-layout'
import { CovidDataService } from 'packages/core/src/lib/covid-data.service';
import { IStateCase } from 'packages/core/src/lib/models';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators'


@Component({
  selector: 'carebox-covid-table-inherited',
  templateUrl: './covid-table-inherited.component.html',
  styleUrls: ['./covid-table-inherited.component.css'],
})
export class CovidTableInheritedComponent extends CovidDailyComponent implements OnDestroy {
  
  public displayedColumns = ['name', 'range', 'casesReported'];

  private subscriptions: Array<Subscription> = [];

  tableData: MatTableDataSource<IStateCase> = new MatTableDataSource([] as IStateCase[]);
  
  @ViewChild(MatSort) sort!: MatSort;


  constructor(covidDataService: CovidDataService) {
    super(covidDataService)
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions.push(this.covidData$.pipe(
      tap(data => {
        this.tableData.data = data.casesByState;
        this.tableData.sort = this.sort;
        this.tableData.sortingDataAccessor = (item: IStateCase, property: string) => {
          console.log(item, property);
          return item[property as keyof IStateCase];
        }
      }),
    ).subscribe())
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => {
      s.unsubscribe();
    })
  }
}
