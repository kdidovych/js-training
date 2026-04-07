'use strict';

(() => {
    let n = prompt('Enter number [0-7]');
    if (!n || n.trim().length !== 1) {
        console.log('You entered invalid value. Please reload the page and try again');
        return;
    }
    n = parseInt(n);
    let mod;
    switch (n) {
        case 0:
            mod = '---';
            break;
        case 1:
            mod = '--x';
            break;
        case 2:
            mod = '-w-';
            break;
        case 3:
            mod = '-wx';
            break;
        case 4:
            mod = 'r--';
            break;
        case 5:
            mod = 'r-x';
            break;
        case 6:
            mod = 'rw-';
            break;
        case 7:
            mod = 'rwx';
            break;
        default: 
            console.log('You entered invalid value. Please reload the page and try again');
            return;
    }
    console.log(`Permission mod "${mod}" corresponds to provided number "${n}".`);
})();
