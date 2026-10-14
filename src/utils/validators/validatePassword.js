export function validatePassword(password) {
    if (!password) {
        return 'Введите пароль';
    }

    if (password.length < 8) {
        return 'Пароль должен содержать минимум 8 символов';
    }

    return true;
}