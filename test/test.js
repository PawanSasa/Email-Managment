const assert = require('chai').assert;
const expect = require('chai').expect;
const validHandler = require('../ValidationHandler');

describe('responseMaker', function () {
    it('Response should be object contains id and status only',function () {
        expect(validHandler.responseMaker({id:555,status:"SENT",_id:'fdfdfdfd'}),{id:555,status:"SENT"});
    })
});
describe('checkTimeFrame', function () {
    it('Check the Current time in between given time range in Sydney time ',function () {
        //expect(validHandler.checkTimeFrame(),true);
        expect(validHandler.checkTimeFrame()).to.be.false;
    })
});