const moment = require("moment")

const formatValidTrips = (data) => {
    const drivers = Object.entries(data)
    return drivers.map(mapDrivers)
}

const mapDrivers = (driver) => {
    const trips = driver[1].trips
        .map(calculateTripDuration)
        .filter(outofBoundsTrips)

    return {
        name: driver[0],
        trips
    }
}

const calculateTripDuration = (trip) => {
    const hours = moment.duration(trip.endTime.diff(trip.startTime)).asHours()

    return {
        milesDriven: trip.milesDriven,
        hours
    }
}

const outofBoundsTrips = (trip) => {
    const milesPerHour = trip.milesDriven / trip.hours
    return milesPerHour > 5 && milesPerHour < 100
}

module.exports = { formatValidTrips }