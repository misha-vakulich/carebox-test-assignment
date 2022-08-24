import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovidTableInheritedComponent } from './components/covid-table-inherited/covid-table-inherited.component';
import { AboutComponent } from './components/about/about.component';
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [{
  path: '', component: CovidTableInheritedComponent,
}, {
  path: 'about', component: AboutComponent,
}]

@NgModule({
  declarations: [
    AppComponent,
    CovidTableInheritedComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
