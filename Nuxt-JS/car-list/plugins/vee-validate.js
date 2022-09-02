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

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
