'use strict';

(() => {
    const poland = new Country('Rzeczpospolita Polska', 'Warsaw', '38 millions', '312,696 km2');
    const china = new Country('Zhōnghuá Rénmín Gònghéguó', 'Beijing');
    console.log(poland);
    console.log(china);
    describeObject(poland);
    describeObject(china);
})();

/**
 * Country constructor
 *
 * @param {String} title 
 * @param {String} capital 
 * @param {String} population 
 * @param {String} area 
 */
function Country(title, capital, population = 'Constantly changes', area = 'Not defined') {
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;
    this.showCountry = function () {
        return `Title: ${title} Capital: ${capital} Population: ${population} Area: ${area}`;
    };
}

/**
 * Output object's non-function entities
 *
 * @param {Object} obj 
 * @returns {void}
 */
function describeObject(obj) {
    if (typeof obj !== 'object') {
        console.log('Provided input is not an object');
        return;
    }
    for (let [key, value] of Object.entries(obj)) {
        if (typeof value !== 'function') {
            console.log(`${key}: ${value}`);
        }
    }
}