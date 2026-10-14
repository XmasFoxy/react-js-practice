export function validateEmail(email) {
    if (!email?.trim()) {
        return 'Введите почту';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return 'Введите корректную почту';
    }

    return true;
}