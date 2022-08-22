import { startOfDay } from "date-fns";
import { Component } from "@angular/core";
import { CalendarView, CalendarEvent } from "angular-calendar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }

  colors = {
    red: {
      primary: "#ad2121",
      secondary: "#FAE3E3",
    },
    blue: {
      primary: "#1e90ff",
      secondary: "#D1E8FF",
    },
    yellow: {
      primary: "#e3bc08",
      secondary: "#FDF1BA",
    },
  };

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: "First event",
      color: this.colors.red,
      meta: {
        description: "This is the first event",
        location: "New York",
        notes: "This is a note",
      },
    },
    {
      start: startOfDay(new Date()),
      title: "Second event",
      color: this.colors.blue,
      meta: {
        description: "This is the second event",
        location: "New York",
        notes: "This is a note",
      },
    },
  ];

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    //let x=this.adminService.dateFormat(date)
    //this.openAppointmentList(x)
  }
}
