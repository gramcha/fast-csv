const { EOL } = require('os');
const csv = require('@pando/parse');

const CSV_STRING = ['a1,b1,c1', 'a2,b2,c2'].join(EOL);

const stream = csv
    .parse({ headers: ['a', undefined, 'c'] })
    .on('error', (error) => console.error(error))
    .on('data', (row) => console.log(row))
    .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`));

stream.write(CSV_STRING);
stream.end();

// Output:
// { a: 'a1', c: 'c1' }
// { a: 'a2', c: 'c2' }
// Parsed 2 rows
