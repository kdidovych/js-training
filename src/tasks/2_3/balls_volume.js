'use strict';

(() => {
    const BALLS_QTY = 12;
    const MIN_EXTERNAL_DIAMETER = 0.5;
    const BORDER_WIDTH = 0.01;

    let totalVolume = 0;
    let radius = (MIN_EXTERNAL_DIAMETER - 2 * BORDER_WIDTH) / 2;
    for (let i = 1; i <= BALLS_QTY; i++) {
        totalVolume += 4 / 3 * Math.PI * Math.pow(radius, 3);
        radius += BORDER_WIDTH;
    }
    let roundedVolume = parseFloat(totalVolume.toFixed(9));

    console.log(`Total volume of ${BALLS_QTY} balls is ${roundedVolume} cubic meters.`);
})();
