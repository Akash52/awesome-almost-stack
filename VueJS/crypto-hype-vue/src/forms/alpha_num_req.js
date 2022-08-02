import { extend } from 'vee-validate';

import { alpha_num } from 'vee-validate/dist/rules';

export const alpha_num_req = extend('alpha_num', {
  ...alpha_num,
  message: 'The {_field_} field may only contain letters and numbers.',
});
