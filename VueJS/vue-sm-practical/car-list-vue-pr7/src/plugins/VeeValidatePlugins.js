import { defineRule, Form, Field, ErrorMessage, configure } from 'vee-validate'
import {
  required,
  email,
  min,
  max,
  url,
  numeric,
  confirmed
} from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

export default app => {
  defineRule('required', required)
  defineRule('email', email)
  defineRule('min', min)
  defineRule('max', max)
  defineRule('url', url)
  defineRule('numeric', numeric)
  defineRule('password', value => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+|~`\-={}[\]:";'<>?,./])(?=.{8,})/
    return regex.test(value)
  })

  defineRule('confirmed', confirmed)

  configure({
    generateMessage: localize('en', {
      messages: {
        required: '{field} is required',
        email: '{field} is not a valid email',
        min: '{field} must be at least 0:{min} characters',
        max: '{field} must be at most 0:{max} characters',
        url: '{field} is not a valid url',
        numeric: '{field} is not a valid number',
        password:
          '{field} must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
        confirmed: 'password do not match'
      }
    })
  })

  app.component('VeeForm', Form)
  app.component('VeeField', Field)
  app.component('VeeErrorMessage', ErrorMessage)
}
