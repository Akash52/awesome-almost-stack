import { extend } from 'vee-validate';

import { required } from 'vee-validate/dist/rules';

export default extend('required', {
  ...required,
  message: 'The {_field_} field is required.',
});
