

const moment = require('moment');

let checkTimeFrame = () =>
{


    let format = 'hh:mm:ss';
    let time = moment().tz('Australia/Sydney'),
        beforeTime = moment('08:00:00', format).tz('Australia/Sydney'),
        afterTime = moment('17:00:00', format).tz('Australia/Sydney');


    return time.isBetween(beforeTime, afterTime)? true: false;

};

let responseMaker = (obj) =>
{
    return {
        id:obj.id,
        status:obj.status
    }
}

module.exports.checkTimeFrame = checkTimeFrame;
module.exports.responseMaker = responseMaker;