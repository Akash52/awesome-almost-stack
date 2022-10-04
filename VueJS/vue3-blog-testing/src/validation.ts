interface Rule {
  type: 'required' | 'length';
}

interface Require extends Rule {
  type: 'required';
}

interface lengthOptions {
  min: number;
  max: number;
}

interface Length extends Rule {
  type: 'length';
  options: lengthOptions;
}

export function required(): Require {
  return {
    type: 'required',
  };
}

export function length(options: lengthOptions): Length {
  return {
    type: 'length',
    options,
  };
}

export interface Status {
  valid: boolean;
  message?: string;
}

type Validator = Require | Length;

export function validate(
  value: string | undefined,
  validators: Validator[]
): Status {
  for (const validator of validators) {
    if (validator.type === 'required') {
      if (!value || value.length === 0) {
        return {
          valid: false,
          message: 'This field is required',
        };
      }
    }
    if (validator.type === 'length') {
      if (
        value &&
        (value.length < validator.options.min ||
          value.length > validator.options.max)
      ) {
        return {
          valid: false,
          message: `This field must be between ${validator.options.min} and ${validator.options.max} characters`,
        };
      }
    }
  }
  return {
    valid: true,
  };
}
