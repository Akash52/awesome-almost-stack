import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CreateRangeChartParams,
  FirstDataRenderedEvent,
  GetChartToolbarItemsParams,
  ValueParserParams,
} from 'ag-grid-community';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

import 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private gridApi = null;
  private gridColumnApi = null;
  defaultColDef: ColDef;
  rowData: any;
  private popupParent;
  public columnDefs: ColDef[] = [
    // one column for showing the groups
    {
      headerName: 'Group',
      cellRenderer: 'agGroupCellRenderer',
      showRowGroup: true,
      minWidth: 210,
    },
    // the first group column
    { field: 'country', rowGroup: true, hide: true },
    { field: 'year', rowGroup: true, hide: true },
    { field: 'month', minWidth: 200 },
    { field: 'lg' },
    { field: 'samsung' },
    { field: 'sony' },
  ];

  constructor() {
    this.columnDefs = [
      {
        field: 'country',
        width: 150,
        chartDataType: 'category',
      },
      {
        field: 'year',
        chartDataType: 'category',
      },
      {
        field: 'month',
        chartDataType: 'category',
      },
      {
        field: 'lg',
        chartDataType: 'series',
        editable: true,
        valueParser: numberValueParser,
      },
      {
        field: 'samsung',
        chartDataType: 'series',
        editable: true,
        valueParser: numberValueParser,
      },
      {
        field: 'sony',
        chartDataType: 'series',
        editable: true,
        valueParser: numberValueParser,
      },
    ];
    this.defaultColDef = {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    };
    this.rowData = createRowData();
    this.popupParent = document.body;
  }

  onFirstDataRendered(event: FirstDataRenderedEvent) {
    var eContainer1 = document.querySelector('#chart1');
    var params1 = {
      cellRange: {
        rowStartIndex: 0,
        rowEndIndex: 4,
        columns: ['country', 'lg', 'samsung', 'sony'],
      },
      chartType: 'groupedBar',
      chartContainer: eContainer1,
    };
    event.api.createRangeChart(params1 as CreateRangeChartParams);
    var eContainer2 = document.querySelector('#chart2');
    var params2 = {
      cellRange: {
        columns: ['group', 'lg'],
      },
      chartType: 'pie',
      chartContainer: eContainer2,
      aggFunc: 'sum',
      chartThemeOverrides: {
        common: {
          padding: {
            top: 20,
            left: 10,
            bottom: 30,
            right: 10,
          },
          legend: {
            enabled: true,
            position: 'bottom',
          },
        },
      },
    };
    event.api.createRangeChart(params2 as CreateRangeChartParams);
    var eContainer3 = document.querySelector('#chart3');
    var params3 = {
      cellRange: {
        columns: ['group', 'samsung'],
      },
      chartType: 'pie',
      chartContainer: eContainer3,
      aggFunc: 'sum',
      chartThemeOverrides: {
        common: {
          padding: {
            top: 20,
            left: 10,
            bottom: 30,
            right: 10,
          },
          legend: {
            enabled: true,
            position: 'bottom',
          },
        },
      },
    };
    event.api.createRangeChart(params3 as CreateRangeChartParams);
    var eContainer4 = document.querySelector('#chart4');
    var params4 = {
      cellRange: {
        columns: ['group', 'sony'],
      },
      chartType: 'pie',
      chartContainer: eContainer4,
      aggFunc: 'sum',
      chartThemeOverrides: {
        common: {
          padding: {
            top: 20,
            left: 10,
            bottom: 30,
            right: 10,
          },
          legend: {
            enabled: true,
            position: 'bottom',
          },
        },
      },
    };
    event.api.createRangeChart(params4 as CreateRangeChartParams);
  }

  onGridReady(params: GridReadyEvent) {
    this.rowData = [
      {
        month: 'January',
        country: 'United States',
        year: 2021,
        lg: 50000,
        samsung: 25000,
        sony: 35000,
        total: 8,
      },
      {
        month: 'February',
        country: 'United States',
        year: 2021,
        lg: 75000,
        samsung: 45000,
        sony: 40000,
        total: 8,
      },
      {
        month: 'March',
        country: 'United States',
        year: 2021,
        lg: 38000,
        samsung: 72000,
        sony: 65000,
        total: 8,
      },
      {
        month: 'January',
        country: 'Japan',
        year: 2021,
        lg: 70000,
        samsung: 65000,
        sony: 55000,
        total: 8,
      },
      {
        month: 'February',
        country: 'Japan',
        year: 2021,
        lg: 65000,
        samsung: 35000,
        sony: 70000,
        total: 8,
      },
      {
        month: 'March',
        country: 'Japan',
        year: 2021,
        lg: 28000,
        samsung: 78000,
        sony: 45000,
        total: 8,
      },
      {
        month: 'January',
        country: 'India',
        year: 2021,
        lg: 52000,
        samsung: 49000,
        sony: 53000,
        total: 8,
      },
      {
        month: 'February',
        country: 'India',
        year: 2021,
        lg: 59000,
        samsung: 55000,
        sony: 63000,
        total: 8,
      },
      {
        month: 'March',
        country: 'India',
        year: 2021,
        lg: 42000,
        samsung: 54000,
        sony: 49000,
        total: 8,
      },
    ];
  }

  getChartToolbarItems(params: GetChartToolbarItemsParams) {
    return [];
  }
}
function numberValueParser(params: ValueParserParams) {
  var res = Number.parseInt(params.newValue);
  if (isNaN(res)) {
    return undefined;
  }
  return res;
}
function createRowData() {
  var countries = ['United States', 'Japan', 'India'];
  return countries.map(function (country, index) {
    var group = index % 2 === 0 ? '2021' : '2020';
    return {
      country: country,
      group: group,
      gold: Math.floor(((index + 1 / 7) * 333) % 100),
      silver: Math.floor(((index + 1 / 3) * 555) % 100),
      bronze: Math.floor(((index + 1 / 7.3) * 777) % 100),
      a: Math.floor(Math.random() * 1000),
      b: Math.floor(Math.random() * 1000),
      c: Math.floor(Math.random() * 1000),
      d: Math.floor(Math.random() * 1000),
    };
  });
}
