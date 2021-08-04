const csv = require('@pando/format');

const csvStream = csv.format({ headers: ['header2', 'header1'], writeHeaders: false });

csvStream.pipe(process.stdout).on('end', () => process.exit());

csvStream.write({ header1: 'value1a', header2: 'value2a' });
csvStream.write({ header1: 'value1a', header2: 'value2a' });
csvStream.write({ header1: 'value1a', header2: 'value2a' });
csvStream.write({ header1: 'value1a', header2: 'value2a' });
csvStream.end();

// Output:
// value2a,value1a
// value2a,value1a
// value2a,value1a
// value2a,value1a
