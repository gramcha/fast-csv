const { EOL } = require('os');
const csv = require('@pando/parse');

const CSV_STRING = ['firstName,lastName', 'bob,yukon', 'sally,yukon', 'timmy,yukon'].join(EOL);

const stream = csv
    .parse({ headers: true })
    .validate((row, cb) => {
        const isValid = row.firstName !== 'bob';
        if (!isValid) {
            return cb(null, false, 'Name is bob');
        }
        return cb(null, true);
    })
    .on('error', (error) => console.error(error))
    .on('data', (row) => console.log(`Valid [row=${JSON.stringify(row)}]`))
    .on('data-invalid', (row, rowNumber, reason) => {
        console.log(`Invalid [rowNumber=${rowNumber}] [row=${JSON.stringify(row)}] [reason=${reason}]`);
    })
    .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`));

stream.write(CSV_STRING);
stream.end();

// Output:
// Invalid [rowNumber=1] [row={"firstName":"bob","lastName":"yukon"}] [reason=Name is bob]
// Valid [row={"firstName":"sally","lastName":"yukon"}]
// Valid [row={"firstName":"timmy","lastName":"yukon"}]
// Parsed 3 rows
