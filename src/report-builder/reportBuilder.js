const reportBuilder = (data) => {
    return data
        .map(calculateAggregatedAverageSpeed)
        .sort(byMilesDriven)
        .reduce(buildReportStr, "")
}

const calculateAggregatedAverageSpeed = (driver) => {
    const aggTripData = driver.trips
        .reduce(aggregateTrips, { milesDriven: 0, hours: 0 })

    const milesDriven = Math.round(aggTripData.milesDriven)
    const milesPerHour = Math.round(milesDriven / aggTripData.hours)
    return {
        name: driver.name,
        milesDriven,
        speed: milesPerHour
    }
}

const aggregateTrips = (acc, trip) => {
    acc.milesDriven += trip.milesDriven
    acc.hours += trip.hours
    return acc
}

const byMilesDriven = (driverA, driverB) => {
    return driverB.milesDriven - driverA.milesDriven
}

const buildReportStr = (acc, driver) => {
    const distanceStr = `${driver.name}: ${driver.milesDriven} miles`
    const mphStr = driver.speed ? `@ ${driver.speed} mph` : ""
    return acc + `${distanceStr} ${mphStr}\n`
}

module.exports = { reportBuilder }