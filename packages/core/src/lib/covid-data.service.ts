import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUSStateCovidData } from './models';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private http: HttpClient) { }

  public getUSData() {
    const url = "https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST"
    return this.http.get<IUSStateCovidData>(url.toString())
  }
}
