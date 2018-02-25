const assert = require('chai').assert;
const expect = require('chai').expect;

import { promiseObject } from './index';

import { gamesList } from '../mock-data/arrayObjects';
//fat arrow will fail to bind `this`
describe('promises', function () {


    /******************************************************************************
     *                          TEST FUNCTIONS                                    *
     * ****************************************************************************
     */
    const incorrectRequestData = () => promiseObject()
            .catch(err => assert.equal(err.message, 'requestData not provided'));

    const psnRequestData = () => {
        const requestObect = {
            psnExclusive: true
        };
        return promiseObject(requestObect)
            .then(data => assert.deepEqual(data, gamesList));
    };



    /********************************************************************************
     *                          TEST CASES                                          *
     * ******************************************************************************
     */

    it('should throw error if request data is not sent', incorrectRequestData);
    it('should send an array of psn Exclusive list', psnRequestData);
});