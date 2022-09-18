import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "./login-reactive.component.html",
  styleUrls: ["./login-reactive.component.css"],
})
export class LoginReactiveComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl("", {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl("", {
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  constructor() {}

  ngOnInit() {}

  login() {}
}
