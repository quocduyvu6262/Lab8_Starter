// unit.test.js
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
describe('isPhoneNumber', () => {
    test('Check valid number', () => {
        expect(functions.isPhoneNumber('650-305-5629')).toBe(true);
    });

    test('Check valid number', () => {
        expect(functions.isPhoneNumber('523-132-1234')).toBe(true);
    })

    test('Check invalid number', () => {
        expect(functions.isPhoneNumber('6503055629')).toBe(false);
    })

    test('Check invalid number', () => {
        expect(functions.isPhoneNumber('65-1234')).toBe(false);
    })
})

describe('isEmail', () => {
    test('Check valid email', () => {
        expect(functions.isEmail('dqvu@ucsd.edu')).toBe(true);
    });

    test('Check valid email', () => {
        expect(functions.isEmail('quocduyvu6262@gmail.com')).toBe(true);
    })

    test('Check invalid email', () => {
        expect(functions.isEmail('notemail.com')).toBe(false);
    })

    test('Check invalid email', () => {
        expect(functions.isEmail('invalid.com')).toBe(false);
    })
})

describe('isStrongPassword', () => {
    test('Check valid password', () => {
        expect(functions.isStrongPassword('qwAas123456')).toBe(true);
    });

    test('Check valid password', () => {
        expect(functions.isStrongPassword('Qwersd1111222')).toBe(true);
    })

    test('Check invalid password', () => {
        expect(functions.isStrongPassword('no')).toBe(false);
    })

    test('Check invalid password', () => {
        expect(functions.isStrongPassword('asdfgh!23')).toBe(false);
    })
})

describe('isDate', () => {
    test('Check valid date', () => {
        expect(functions.isDate('11/21/2022')).toBe(true);
    });

    test('Check valid date', () => {
        expect(functions.isDate('10/10/1920')).toBe(true);
    })

    test('Check invalid date', () => {
        expect(functions.isDate('02/314/2021')).toBe(false);
    })

    test('Check invalid date', () => {
        expect(functions.isDate('424/2022')).toBe(false);
    })
})

describe('isHexColor', () => {
    test('Check valid hex color', () => {
        expect(functions.isHexColor('ABC')).toBe(true);
    });

    test('Check valid hex color', () => {
        expect(functions.isHexColor('ffffff')).toBe(true);
    })

    test('Check invalid hex color', () => {
        expect(functions.isHexColor('1')).toBe(false);
    })

    test('Check invalid hex color', () => {
        expect(functions.isHexColor('')).toBe(false);
    })
})

