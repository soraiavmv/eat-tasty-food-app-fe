

export function validateCVC(value) {
    const maxLength = 3;
    const newVal = value.replace(/ /g, '');

    if (newVal.length !== maxLength) {
        return false;
    }

    if (isNaN(parseInt(newVal, 10))) {
        return false;
    }

    return true;
}

export function validateExpirationDate(value) {
    const maxLength = value.charAt(2) === '/' ? 5 : 4;
    const newVal = value.replace(/ /g, '');

    if (newVal.length !== maxLength) {
        return false;
    }

    const month = parseInt(newVal.substring(0, 2), 10);
    const year = parseInt(newVal.substring(maxLength === 4 ? 2 : 3), 10);
    const currentYear = new Date().getFullYear() - 2000;
    const currentMonth = new Date().getMonth();

    if (isNaN(month) ||
        isNaN(year) ||
        month > 12 ||
        year < currentYear ||
        (year === currentYear && month - 1 < currentMonth)) {

        return false;
    }

    return true;
}

export function validateCardNumber(value) {
    const maxLength = 16;
    const newVal = value.replace(/ /g, '');

    if (newVal.length !== maxLength) {
        return false;
    }

    if (isNaN(parseInt(newVal, 10))) {
        return false;
    }

    return true;
}
