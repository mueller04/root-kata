const test = require('ava')
const { formatValidTrips } = require("./tripFormatter")
const moment = require("moment")

test('format trip data', t => {

    const input = {
        Dan: {
            trips: [
                {
                    startTime: moment('06:12', "HH:mm"),
                    endTime: moment('06:32', "HH:mm"),
                    milesDriven: 21.8
                },
                {
                    startTime: moment('07:15', "HH:mm"),
                    endTime: moment('07:45', "HH:mm"),
                    milesDriven: 17.3
                }
            ]
        },
        Lauren: {
            trips: [
                {
                    startTime: moment('12:01', "HH:mm"),
                    endTime: moment('13:16', "HH:mm"),
                    milesDriven: 42
                }
            ]
        },
        Kumi: { trips: [] }
    }

    const result = formatValidTrips(input)

    const expected = [
        {
            driver: 'Dan', trips: [
                { milesDriven: 21.8, hours: 0.3333333333333333 },
                { milesDriven: 17.3, hours: 0.5 }
            ]
        },
        {
            driver: 'Lauren', trips: [
                { milesDriven: 42, hours: 1.25 }
            ]
        },
        { driver: 'Kumi', trips: [] }
    ]

    t.deepEqual(result, expected)
})

test('discard out of bounds trips', t => {
    const input = {
        Dan: {
            trips: [
                {
                    startTime: moment('07:15', "HH:mm"),
                    endTime: moment('07:45', "HH:mm"),
                    milesDriven: 100
                },
                {
                    startTime: moment('06:12', "HH:mm"),
                    endTime: moment('06:32', "HH:mm"),
                    milesDriven: 1
                }]
        },
        Lauren: {
            trips: [
                {
                    startTime: moment('12:01', "HH:mm"),
                    endTime: moment('13:16', "HH:mm"),
                    milesDriven: 42
                }
            ]
        },
        Kumi: { trips: [] }
    }

    const result = formatValidTrips(input)

    const expected = [
        {
            driver: 'Dan', trips: []
        },
        {
            driver: 'Lauren', trips: [
                { milesDriven: 42, hours: 1.25 }
            ]
        },
        { driver: 'Kumi', trips: [] }
    ]

    t.deepEqual(result, expected)
})