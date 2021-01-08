const test = require('ava')
const { reportBuilder } = require("./reportBuilder")

test('round values to nearest integer', t => {

    const input = [
        {
            name: 'Lauren', trips: [
                { milesDriven: 42.4, hours: 1.25 }
            ]
        }
    ]

    const result = reportBuilder(input)

    const expected = "Lauren: 42 miles @ 34 mph\n"

    t.is(result.trim(), expected.trim())
});

test('report no speed for driver with no trips', t => {

    const input = [
        { name: 'Kumi', trips: [] }
    ]

    const result = reportBuilder(input)

    const expected = "Kumi: 0 miles\n"

    t.is(result.trim(), expected.trim())
});

test('build report with expected output sorted by miles driven descending', t => {

    const input = [
        {
            name: 'Dan', trips: [
                { milesDriven: 17.3, hours: 0.5 },
                { milesDriven: 21.8, hours: 0.3333333333333333 }
            ]
        },
        {
            name: 'Lauren', trips: [
                { milesDriven: 42, hours: 1.25 }
            ]
        },
        { name: 'Kumi', trips: [] }
    ]

    const result = reportBuilder(input)

    const expected = "Lauren: 42 miles @ 34 mph\n"
    + "Dan: 39 miles @ 47 mph\n"
    + "Kumi: 0 miles\n"

    t.is(result.trim(), expected.trim())
});