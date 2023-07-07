// error-messages.constants.ts
import { PATTERNS } from '.';

export const ERROR_MESSAGES = {
  required: 'This field is required.',
  minLength: (minLength: number) =>
    `Minimum length is ${minLength} characters.`,
  maxLength: (maxLength: number) =>
    `Maximum length is ${maxLength} characters.`,
  pattern: {
    [PATTERNS.lettersOnly]: 'Please enter letters only.',
    [PATTERNS.numbersOnly]: 'Please enter numbers only.',
    default: 'Please enter a valid value.',
  },
  email: 'Please enter a valid email address.',
};
