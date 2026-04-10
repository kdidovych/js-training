'use strict';

simpleNumbers: for (let i = 1; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            continue simpleNumbers;
        }
    }
    console.log(i);
}
