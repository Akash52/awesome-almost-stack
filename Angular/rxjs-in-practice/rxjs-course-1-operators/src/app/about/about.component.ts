import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { fromEvent, interval, noop, Observable, timer } from "rxjs";

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

    const http$ = Observable.create((observer) => {
      fetch("/api/courses")
        .then((response) => {
          return response.json();
        })
        .then((body) => {
          observer.next(body);
          observer.complete();
          observer.next();
        })
        .catch((err) => {
          observer.error(err);
        });
    });
    http$.subscribe(
      (courses) => console.log(courses),
      noop,
      () => console.log("Completed")
    );
  }
}
