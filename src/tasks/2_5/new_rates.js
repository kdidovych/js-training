'use strict';

(() => {
    let wonScore = Number(prompt('Enrter won person rate'));
    let lostScore = Number(prompt('Enrter lost person rate'));
    let newRate = getNewWinnerRate(wonScore, lostScore);
    console.log(`Winner new rate ${newRate}`);
})();

/**
 * Calculate new winner Rate
 *
 * @param {Number} wonRate 
 * @param {Number} lostRate 
 * @returns {Number}
 * @throws {Error}
 */
function getNewWinnerRate(wonRate, lostRate) {
    if (Number.isNaN(wonRate) || Number.isNaN(lostRate) || wonRate < 0 || lostRate < 0) {
        throw new Error('Invalid rate data');
    }
    let newRate = wonRate;
    switch (true) {
        case (wonRate == 0):
            newRate = lostRate;
            break;
        case (lostRate == 0):
            newRate = wonRate;
            break;
        case (wonRate >= lostRate):
            if (wonRate - lostRate <= 2) {
                newRate += 2;
            } else if (wonRate - lostRate < 20) {
                newRate += 1;
            }
            break;
        default:
            newRate += (lostRate - wonRate + 5) / 3;
    }
    return newRate;
}
