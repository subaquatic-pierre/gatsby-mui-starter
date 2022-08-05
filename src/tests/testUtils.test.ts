import { isValidEmail } from '../utils/formUtils';

describe('Is valid email', () => {
  it('Returns correct email', () => {
    const isValid = isValidEmail('pierre@gmail.com');
    expect(isValid).toBeTruthy();
  });

  it('Returns invalid email', () => {
    const notValid = isValidEmail('wrongemail');
    expect(notValid).toBeFalsy();
  });
});
