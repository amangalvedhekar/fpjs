import {
    sum,
    mapNewProperty,
    curriedMapNewProperty,
    filterFromArray,
} from './currying/index';

import {
    gamesList,
    filterList
} from "./mock-data/arrayObjects";


const even = (num) => num%2 ===0;

const odd = (num) => num%2 !== 0;



/**
 * simple curry function usage example
 */

console.log(sum(20)); //will not execute but will return the last function without executing

console.log(sum(20)(10)); //will return 30

console.log(sum(20)()); //will return NaN since the last parameter is undefined

/**
 * mapNewProperty is not curried which makes it a tightly coupled function
 */
console.log('games with new property', gamesList.map( mapNewProperty ));

console.log('curried function returning new property', curriedMapNewProperty(gamesList)({ psnExclusive: true }));

console.log('some more example', curriedMapNewProperty(gamesList)({}));

/**ToDO: add examples with Rambda
 */
console.log('filter curried', filterFromArray(filterList)(even));

console.log('filter curried', filterFromArray(filterList)(odd));