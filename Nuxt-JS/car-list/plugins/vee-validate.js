import {
  ValidationObserver,
  ValidationProvider,
  extend,
  setInteractionMode,
} from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import Vue from "vue";

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

//required

extend("required", {
  ...rules.required,
  message: "This field is required",
});

extend("password-complexity", {
  getMessage: (field) =>
    `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,
  validate: (value) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
      value
    );
  },
});

extend("email", {
  ...rules.email,
  message: "This field must be a valid email",
});

extend("min", {
  ...rules.min,
  message: "This field must have at least {length} characters",
});

extend("max", {
  ...rules.max,
  message: "This field must have at most {length} characters",
});

extend("confirmed", {
  ...rules.confirmed,
  message: "This field confirmation does not match",
});

//image url

extend("image", {
  validate: (value) => {
    return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(value);
  },
  message: "This field must be a valid image url",
});

//url

extend("url", {
  validate: (value) => {
    return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
      value
    );
  },
  message: "This field must be a valid url",
});

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
