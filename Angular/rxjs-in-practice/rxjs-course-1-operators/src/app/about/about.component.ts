import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let counter = 0;
    setInterval(() => {
      counter++;
      console.log(counter);
    }, 1000);
  }
}
