'use strict';

/**
 * @param {String|Number} prefix
 * @returns {Function}
 */
function createLogger(prefix = '') {
    return function strLogger(message) {
        let msg = prompt('Enter message');
        console.log(prefix + msg);
    }
}
const authLogger = createLogger('AUTH');
const apiLogger = createLogger('API');
authLogger('User logged in'); // AUTH: User logged in
apiLogger('Request failed'); // API: Request failed

/**
 * @param {Number} limit
 * @returns {Function}
 * @throws {Error}
 */
function createLimiter(limit) {
    let counter = 0;
    if (Number.isNaN(limit) || !Number.isInteger(limit)) {
        throw new Error('incorrect input limit value');
    }
    return function () {
        counter++;
        if (counter <= limit) {
            console.log('Ok');
        } else {
            console.log('Error');
        }
    }
}
const limited = createLimiter(2);
limited(); // ok
limited(); // ok
limited(); // Error

/**
 * @param {Function} customFunction 
 * @returns {Array}
 */
function createFilter(customFunction) {
    return function (inputArray) {
        if (!Array.isArray(inputArray)) {
            return [];
        }
        return inputArray.filter(customFunction);
    };
}
const arrNumb = [0, 1, 2, 3, 4, 9, 11, 112, 123];
// Create filter for even numbers
const getEvenNumbers = createFilter((el) => el % 2 === 0);
console.log(getEvenNumbers(arrNumb))
// Ctreate filter for numbers > 10
const getGreateTenNumbers = createFilter((el) => el > 10);
console.log(getGreateTenNumbers(arrNumb));
