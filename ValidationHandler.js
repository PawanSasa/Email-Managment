

const moment = require('moment');
const timezone = require('moment-timezone');

let checkTimeFrame = () =>
{

    let format = 'hh:mm:ss';

    let time = moment(new Date(),format).tz("Australia/Sydney"),
        beforeTime = moment('08:34:00', format),
        afterTime = moment('10:34:00', format);

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