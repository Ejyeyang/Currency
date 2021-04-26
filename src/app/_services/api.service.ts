import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://v6.exchangerate-api.com/v6/5fd495f6be7d638fb346df15/latest/USD';

  constructor(
    private http: HttpClient
  ) { }

  getCurrencyList(){
    return this.http.get(this.baseUrl);
  }
}
