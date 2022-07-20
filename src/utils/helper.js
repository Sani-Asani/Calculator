export const getLastResult = (a, sign, b) => {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        case '<':
            return a < b;
        case '=':
            return a === b;
        case '>':
            return a > b;
        default:
            return 'Invalid operation';
    }
};

export const floatify = (sum) => {
    return parseFloat((sum).toFixed(10));
}

