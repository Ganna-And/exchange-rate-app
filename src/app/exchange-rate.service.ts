import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRateService {
  private apiUrl = ' https://v6.exchangerate-api.com/v6/a0a761bdd94eb8f29e5cbffb/latest/USD';
  private apiUrlToEUR = ' https://v6.exchangerate-api.com/v6/a0a761bdd94eb8f29e5cbffb/latest/EUR';
  private apiPairCovertable ='https://v6.exchangerate-api.com/v6/a0a761bdd94eb8f29e5cbffb/pair/EUR/GBP'


  // Replace 'YOUR_API_KEY' with your actual API key
  private apiKey = 'a0a761bdd94eb8f29e5cbffb';

  constructor(private http: HttpClient) {}

  getExchangeRates() {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.http.get(this.apiUrl, { headers }).pipe(
      catchError((error: any) => {
        console.error('Error fetching exchange rates:', error);
        return throwError(error);
      })
    );
  }
  getExchangeRatesEUR() {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.http.get(this.apiUrlToEUR, { headers }).pipe(
      catchError((error: any) => {
        console.error('Error fetching exchange rates:', error);
        return throwError(error);
      })
    );
  }

  getPairCovertable(currencyPair: string) {
    // Construct the URL based on the currency pair
    const apiUrl = `https://v6.exchangerate-api.com/v6/a0a761bdd94eb8f29e5cbffb/pair/${currencyPair}`;
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });
  
    return this.http.get(apiUrl, { headers }).pipe(
      catchError((error: any) => {
        console.error('Error fetching exchange rates:', error);
        return throwError(error);
      })
    );
  }
}