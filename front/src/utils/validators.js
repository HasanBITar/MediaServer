export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    const note = isValid ? 'Valid Email' : 'Invalid Email';
    return [isValid, note];
}

export function validatePassword(password) {
    if(password.length < 8) return [false, 'it should be longer than 8 characters'];
    return [null, ''];
}