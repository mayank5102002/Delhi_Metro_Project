const metro_data = require('../data/Metro_data')

const stationsToNum = metro_data.stationsToNum

function validate(source, destination){
    if(stationsToNum[source] && stationsToNum[destination]){
        return true;
    }

    return false;
}


module.exports = validate