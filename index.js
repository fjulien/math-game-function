export const MIN = 0;
export const MAX = 9;
export const ERROR_PARAMS = "params missing";
export const ERROR_TYPE_PARAMS = "params is not a number";
export const ERROR_SIZE_PARAMS = "params is not between 0 and 9";

export function makeRandomNumber() {return Math.floor((Math.random() * 10))};


export function multiply(nb1, nb2){
    if(nb1 === undefined || nb2 === undefined) throw ERROR_PARAMS;
    if(typeof nb1 !== "number" || typeof nb2 !== "number") throw ERROR_TYPE_PARAMS;
    if((nb1 < MIN || nb1 > MAX) || (nb2 < MIN || nb2 > MAX)) throw ERROR_SIZE_PARAMS;
    return nb1*nb2;
};
