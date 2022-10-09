import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.addEventListener("click", function (event) {
      console.log(event);
      let counter = 0;
      setTimeout(() => {
        setInterval(() => {
          counter++;
          console.log(counter);
        }, 1000);
      }, 3000);
    });
  }
}
