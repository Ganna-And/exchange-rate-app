

import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  usdToUah: number | null = null;
  eurToUah: number | null = null;

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit() {
    this.exchangeRateService.getExchangeRates().subscribe((data: any) => {
      console.log(data)
      this.usdToUah = +(data.conversion_rates.UAH).toFixed(2);
    });
    this.exchangeRateService.getExchangeRatesEUR().subscribe((data: any) => {
      console.log(data)
      this.eurToUah = +(data.conversion_rates.UAH).toFixed(2);
    });
  }
}

