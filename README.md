# Root Coding Exercise

## Prerequisites:

This project was built using node version v12.16.0 and npm version 6.14.10

### Install:

clone the repository
from the root directory of the repository run
```
npm install
```

### Run
```
cat resources/data.txt | node index.js
```

### Test 
```
npm test
```

## Approach:


### Code Style

I focused on keeping my tests decoupled from my implementation by testing the behavior, not the implementation.  The functions under test form the API of the module and are treated as a black box.  I applied Single Responsibility to each module for reusability.

### Code Structure

I divided the problem into three parts.

The job of the InputParser is to normalize the incoming string as a javascript object for ease of manipulation.

The job of the TripFormatter is to prepare the data for reporting.  This means tranforming the startTime and endTime to a total duration by calculating the difference.  I also discard out of bounds trips, as I interpreted this requirement to be applicable to the general backend data and not report specific.  I do not aggregate the trips or calculate the aggregate speed in order to report the raw data for any kind of report.  This ensures flexibility as multiple reports can consume this data.

The job of the ReportBuilder is to build a report string of the aggregate distance and aggregate average speed across all trips per driver.  The specific calculation of average miles per hour across all trips along with the sorting is performed specifically for this report.  