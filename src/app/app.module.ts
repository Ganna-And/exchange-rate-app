import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExchangeRateService } from './exchange-rate.service';
import { RouterModule } from '@angular/router';
import { CurrencyConversionComponent } from './currency-converter/currency-converter.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({

  declarations: [AppComponent, HeaderComponent, CurrencyConversionComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule, FormsModule],
  providers: [ExchangeRateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
