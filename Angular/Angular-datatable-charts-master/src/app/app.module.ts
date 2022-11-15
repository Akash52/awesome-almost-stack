import "../license";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { WjCoreModule } from "@grapecity/wijmo.angular2.core";
import { WjGridModule } from "@grapecity/wijmo.angular2.grid";
import { WjChartModule } from "@grapecity/wijmo.angular2.chart";
import { WjChartMapModule } from "@grapecity/wijmo.angular2.chart.map";
import { WjGaugeModule } from "@grapecity/wijmo.angular2.gauge";
import { WjInputModule } from "@grapecity/wijmo.angular2.input";

import { HttpClientModule } from "@angular/common/http";
import { TvInfoComponent } from "./tv-info/tv-info.component";

@NgModule({
  declarations: [AppComponent, TvInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjCoreModule,
    WjGridModule,
    WjChartModule,
    WjChartMapModule,
    WjGaugeModule,
    WjInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
