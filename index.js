const fs = require('fs'); 
const { inputParser } = require('./inputParser/inputParser')

const data = fs.readFileSync(0);

const parsedData = inputParser(data.toString());

console.log(parsedData)
