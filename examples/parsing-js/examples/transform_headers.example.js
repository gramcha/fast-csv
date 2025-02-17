const { EOL } = require('os');
const csv = require('@pando/parse');

const CSV_STRING = ['header1,header2', 'a1,b1', 'a2,b2'].join(EOL);

const stream = csv
    .parse({
        headers: (headers) => headers.map((h) => h.toUpperCase()),
    })
    .on('error', (error) => console.error(error))
    .on('data', (row) => console.log(row))
    .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`));

stream.write(CSV_STRING);
stream.end();

// Output:
// { HEADER1: 'a1', HEADER2: 'b1' }
// { HEADER1: 'a2', HEADER2: 'b2' }
// Parsed 2 rows
