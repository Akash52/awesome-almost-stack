import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { createPasswordStrengthValidator } from "./../validators/password-strength-validator";

@Component({
  selector: "login",
  templateUrl: "./login-reactive.component.html",
  styleUrls: ["./login-reactive.component.css"],
})
export class LoginReactiveComponent implements OnInit {
  // form = new FormGroup({
  //   email: new FormControl("", {
  //     validators: [Validators.required, Validators.email],
  //     updateOn: "blur",
  //   }),
  //   password: new FormControl("", {
  //     validators: [
  //       Validators.required,
  //       Validators.minLength(8),
  //       createPasswordStrengthValidator(),
  //     ],
  //   }),
  // });

  form = this.fb.group({
    email: [
      "",
      {
        validators: [Validators.required, Validators.email],
        updateOn: "blur",
      },
    ],
    password: [
      "",
      [
        Validators.required,
        Validators.minLength(8),
        createPasswordStrengthValidator(),
      ],
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  login() {}
}
