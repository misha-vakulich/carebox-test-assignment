import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CoreLayoutModule } from '@carebox/core-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovidTableComponent } from './components/covid-table/covid-table.component';
import { AboutComponent } from './components/about/about.component';
import { CovidTableUntouchedComponent } from './components/covid-table-untouched/covid-table-untouched.component';

const routes: Routes = [
  {
    path: '',
    component: CovidTableComponent,
  },
  {
    path: 'untouched',
    component: CovidTableUntouchedComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CovidTableComponent,
    AboutComponent,
    CovidTableUntouchedComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    CoreLayoutModule,
    HttpClientJsonpModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
