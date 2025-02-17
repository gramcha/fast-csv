const { EOL } = require('os');
const csv = require('@pando/parse');

const CSV_STRING = ['firstName,lastName', 'bob,yukon', 'sally,yukon', 'timmy,yukon'].join(EOL);

const stream = csv
    .parse({ headers: true })
    .validate((data) => data.firstName !== 'bob')
    .on('error', (error) => console.error(error))
    .on('data', (row) => console.log(`Valid [row=${JSON.stringify(row)}]`))
    .on('data-invalid', (row, rowNumber) =>
        console.log(`Invalid [rowNumber=${rowNumber}] [row=${JSON.stringify(row)}]`),
    )
    .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`));

stream.write(CSV_STRING);
stream.end();

// Output:
// Invalid [rowNumber=1] [row={"firstName":"bob","lastName":"yukon"}]
// Valid [row={"firstName":"sally","lastName":"yukon"}]
// Valid [row={"firstName":"timmy","lastName":"yukon"}]
// Parsed 3 rows
