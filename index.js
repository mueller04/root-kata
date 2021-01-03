const fs = require('fs');
const { inputParser } = require('./src/inputParser/inputParser')
const { formatValidTrips } = require('./src/tripFormatter/tripFormatter')

const data = fs.readFileSync(0)

const parsedData = inputParser(data.toString())
const calculatedData = formatValidTrips(parsedData)
console.log(calculatedData[0])
