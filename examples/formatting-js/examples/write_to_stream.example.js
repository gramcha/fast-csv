const csv = require('@pando/format');

const rows = [
    ['a', 'b'],
    ['a1', 'b1'],
    ['a2', 'b2'],
];
csv.writeToStream(process.stdout, rows);

// Output:
// a,b
// a1,b1
// a2,b2
