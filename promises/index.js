const Promise = require('bluebird');
import {gamesList} from '../mock-data/arrayObjects';

const promiseObject = (requestData) => {
    if(!requestData) {
        const reason = new TypeError('requestData not provided');
        return Promise.reject(reason);
    }
    return new Promise((resolve, reject) => {
        if(requestData.psnExclusive){
            resolve(gamesList);
        }else{
            const error = new TypeError('only psn list');
            reject(error);
        }
    });
};

export {
    promiseObject
};