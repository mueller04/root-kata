const test = require('ava')
const { inputParser } = require("./inputParser")
const moment = require("moment")

test('input data is parsed', t => {

    const data = 
    `Driver Dan
    Driver Lauren
    Driver Kumi
    Trip Dan 07:15 07:45 17.3
    Trip Dan 06:12 06:32 21.8
    Trip Lauren 12:01 13:16 42.0`

    const result = inputParser(data)

    const expected = {
        'Dan': {
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
        'Lauren': {
            trips: [
                {
                    startTime: moment('12:01', "HH:mm"),
                    endTime: moment('13:16', "HH:mm"),
                    milesDriven: 42
                }
            ]
        },
        'Kumi': {
            trips: []
        }
    }

    t.deepEqual(result, expected)
})