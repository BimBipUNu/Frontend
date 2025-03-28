function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }
    const chars = password.split('');

    const hasUpperChar = chars.filter(char => char >= 'A' && char <= 'Z');
    if (hasUpperChar.length === 0) {
        return false;
    }
    const hasLowerChar = chars.filter(char => char >= 'a' && char <= 'z');
    if (hasLowerChar.length === 0) {
        return false;
    }
    const hasNumberChar = chars.filter(char => char >= '0' && char <= '9');
    if (hasNumberChar.length === 0) {
        return false;
    }
    return true;
}

console.log(isStrongPassword("Abc123!@"))