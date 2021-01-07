const test = require('ava')
const { reportBuilder } = require("./reportBuilder")

test('build report', t => {

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