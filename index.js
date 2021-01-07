const fs = require('fs');
const { inputParser } = require('./src/input-parser/inputParser')
const { formatValidTrips } = require('./src/trip-formatter/tripFormatter')
const { reportBuilder } = require('./src/report-builder/reportBuilder')

const data = fs.readFileSync(0)

const parsedData = inputParser(data.toString())
const calculatedData = formatValidTrips(parsedData)
const report = reportBuilder(calculatedData)
console.log(report)
