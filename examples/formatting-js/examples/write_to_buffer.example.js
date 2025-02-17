const csv = require('@pando/format');

const rows = [
    ['a', 'b'],
    ['a1', 'b1'],
    ['a2', 'b2'],
];
csv.writeToBuffer(rows)
    .then((data) => console.log(data.toString()))
    .catch((e) => console.error(e));

// Output:
// a,b
// a1,b1
// a2,b2
