import { Component } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConversionComponent {
  amountFrom!: number | null;
  currencyFrom: string = 'USD';
  amountTo!: number | null;
  currencyTo: string = 'UAH';
  conversionResult: string = '';
  timeStamp: string = '';
  isError!: boolean
 
  constructor(private exchangeRateService: ExchangeRateService) {}

  convertCurrency() {
   this.isError = false;
    if (this.currencyFrom && this.currencyTo) {
      const currencyPair = `${this.currencyFrom}/${this.currencyTo}`;
  
      this.exchangeRateService.getPairCovertable(currencyPair).subscribe((result: any) => {
        const conversionRate = result.conversion_rate;
        const tempAmountTo = this.amountTo;
         this.timeStamp = result.time_last_update_utc;
  
        if (this.amountFrom) {
          this.amountTo = +(this.amountFrom * conversionRate).toFixed(2);
          
          this.conversionResult = `Conversion rate for ${currencyPair}: ${conversionRate}. Result: ${this.amountFrom} ${this.currencyFrom} = ${this.amountTo} ${this.currencyTo}`;
        } else if (this.amountTo) {
          this.amountFrom = +(this.amountTo / conversionRate).toFixed(2);
          this.amountTo = tempAmountTo
          
          this.conversionResult = `Conversion rate for ${currencyPair}: ${conversionRate}. Result: ${this.amountFrom} ${this.currencyFrom} = ${this.amountTo} ${this.currencyTo}`;
          
        } else {
          this.conversionResult = 'Please enter a valid amount.';
          this.isError = true
        }
      });
    } else {
      this.conversionResult = 'Please enter valid values.';
    }
  }
  resetAmountFrom() {
    this.amountFrom = null;
  }
  
  resetAmountTo() {
  }

}

