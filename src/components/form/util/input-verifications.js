export function validateCVC(value) {
    const maxLength = 3; // consider that cvc has a maximum of 3 digits
    const newVal = value.replace(/ /g, ''); // remove any white spaces from string

    // value validations
    if (newVal.length !== maxLength || isNaN(parseInt(newVal, 10))) {
        return false;
    }

    return true;
}

export function validateExpirationDate(value) {
    const maxLength = value.charAt(2) === '/' ? 5 : 4; // consider that date is formatted as MM/YY with / being optional
    const newVal = value.replace(/ /g, ''); // remove any white spaces from string

    // if length is incorrect there's no need to do execute further logic
    if (newVal.length !== maxLength) {
        return false;
    }

    const month = parseInt(newVal.substring(0, 2), 10);
    const year = parseInt(newVal.substring(maxLength === 4 ? 2 : 3), 10);
    const currentYear = new Date().getFullYear() - 2000;
    const currentMonth = new Date().getMonth();

    // value validations
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
    const maxLength = 16; // consider that card number has exactly 16 digits
    const newVal = value.replace(/ /g, ''); // remove any white spaces from string

    // value validations
    if (newVal.length !== maxLength || isNaN(parseInt(newVal, 10))) {
        return false;
    }

    return true;
}
