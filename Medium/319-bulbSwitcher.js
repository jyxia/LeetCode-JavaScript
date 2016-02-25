/**
 * Key, focus on the bulb, the ith bulb's stutus will not be changed after ith round
 * e.g. 2nd bulb's status only can be changed twice, 1*2, and 2*1, that is, 2's factors
 * If the number of factors of i is even, it will be no effect to the bulb, the bulb stays
 * off. (e.g. 6 has 1, 2, 3, 6, only (1,6) (2,3) (3,2) (6,1) can change the status,
 * but 4 times has no effect to the status). However, if the number of factors is odd, the
 * bulb status will be changed. (e.g. 4 has 1, 2, 4, (1,4), (2,2), (4,1)), so we can see only
 * the number of total 'on' bulb is the number of sqaure root of n.
 *
 * if the number of factors is odd, the
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};
