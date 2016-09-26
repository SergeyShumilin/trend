Trend
=========

A small library providing utility methods to `translate` the given array into a formatted string

## Installation

  npm install trend --save

## Usage

  var trend = require('scapegoat');

  var arr = [1,2,3];
trend.translate(arr).then(result => {
	console.log('result', result)
});

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release