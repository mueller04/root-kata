const moment = require("moment")

const inputParser = (data) => {
    const lines = data.split(/\r?\n/);

    const parsedData = lines
        .map(line => line.trim().split(/\s+/))
        .map(parseLine)
        .reduce(combineTrips, {})

    return parsedData
}

const parseLine = ([type, ...items]) => {
    if (type === 'Driver') {
        return { driver: items[0], trips: [] }
    }

    if (type === 'Trip') {
        return parseTrip(items)
    }
}

const parseTrip = ([driver, startTime, endTime, milesDriven]) => {
    const format = "HH:mm"
    return {
        driver,
        trips: [{
            startTime: moment(startTime, format),
            endTime: moment(endTime, format),
            milesDriven: parseFloat(milesDriven)
        }]
    }
}

const combineTrips = (acc, data) => {
    if (!acc[data.driver]) {
        acc[data.driver] = { trips: [] }
    }

    const currentTrips = acc[data.driver].trips
    acc[data.driver].trips = [...data.trips, ...currentTrips]
    return acc
}

module.exports = { inputParser }
