export function validatePassword(password) {
    if (!password) {
        return 'Enter your password';
    }

    if (password.length < 8) {
        return 'The password must be longer than 8 characters';
    }

    return true;
}