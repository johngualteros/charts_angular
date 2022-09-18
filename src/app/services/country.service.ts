import { Injectable } from '@angular/core';

interface Country{
  name: string;
  value: number;
}
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private data: Country[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];

  get countryData(){
    return this.data;
  }

  randomData(){
    this.data = this.data.map(country => {
      return {
        name: country.name,
        value: Math.round(Math.random() * 1000000)
      }
    });
  }
}
