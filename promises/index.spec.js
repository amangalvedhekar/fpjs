const assert = require('chai').assert;
const expect = require('chai').expect;

import { promiseObject } from './index';
//fat arrow will fail to bind `this`
describe('promises', function () {


    /******************************************************************************
     *                          TEST FUNCTIONS                                    *
     * ****************************************************************************
     */
    const incorrectRequestData = () => promiseObject()
            .catch(err => assert.equal(err.message, 'requestData not provided'));



    /********************************************************************************
     *                          TEST CASES                                          *
     * ******************************************************************************
     */

    it('should throw error if request data is not sent', incorrectRequestData);
});