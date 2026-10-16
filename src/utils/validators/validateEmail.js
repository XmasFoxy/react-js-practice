export function validateEmail(email) {
    if (!email?.trim()) {
        return 'Enter your email';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return 'Enter the valid email';
    }

    return true;
}