import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { fromEvent, interval, noop, Observable, timer } from "rxjs";
import { createHttpObservable } from "../common/util";
import { map } from "rxjs/operators";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // const interval$ = interval(1000);
    // interval$.subscribe((x) => console.log("interval", x));
    // interval$.subscribe((x) => console.log("interval2", x));
    //Timer
    // const timer$ = timer(3000, 1000);
    // const sub = timer$.subscribe((x) => console.log("timer", x));
    // setTimeout(() => sub.unsubscribe(), 5000);
    //fromEvent
    // const click$ = fromEvent(document, "click");
    // click$.subscribe(
    //   (x) => console.log("click", x),
    //   (err) => console.log(err),
    //   () => console.log("Completed")
    // );
    //** */
    // const http$ = createHttpObservable("/api/courses");
    // http$.subscribe(
    //   (courses) => console.log(courses),
    //   noop,
    //   () => console.log("Completed")
    // );
    //** */
    const http$ = createHttpObservable("/api/courses");

    const courses$ = http$.pipe(map((res) => Object.values(res["payload"])));

    courses$.subscribe(
      (courses) => console.log(courses),
      noop,
      () => console.log("Completed")
    );
  }
}
