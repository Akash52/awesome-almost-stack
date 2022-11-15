import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import * as wjCore from "@grapecity/wijmo";

@Component({
  selector: "app-tv-info",
  templateUrl: "./tv-info.component.html",
  styleUrls: ["./tv-info.component.css"],
})
export class TvInfoComponent implements OnInit {
  constructor(private dataService: DataService) {}

  TvData: wjCore.CollectionView;

  piePalette = ["#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac"];
  chartPalette = ["#2b8cbe", "#0868ac"];

  ngOnInit(): void {
    this.dataService.getTvData().subscribe((data) => {
      this.TvData = new wjCore.CollectionView(data);
    });
  }
}
