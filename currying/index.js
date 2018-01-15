/**
 *
 * @param a
 * @returns {function(*): *}
 */
const sum = a => b => a + b;

/**
 * function that is not curried making it tightly coupled with property
 * being assigned
 * @param {object}prop
 * @returns {object}
 */
const mapNewProperty = (prop) =>
    Object.assign(
        {},
        prop,
        { psnExclusive: true }
    );

/**
 * curried function
 * @param array
 * @returns {function(*=): ({} & any & any)}
 */
const curriedMapNewProperty = array => prop => array.map(elm=>Object.assign({}, elm, prop));

const filterFromArray = array => condition => array.filter(condition);


export {
    sum,
    mapNewProperty,
    curriedMapNewProperty,
    filterFromArray,
};