import { format } from '@pando/format';

const csvStream = format({ headers: true, quoteColumns: { header2: true }, quoteHeaders: false });

csvStream.pipe(process.stdout).on('end', () => process.exit());

csvStream.write({ header1: 'value1a', header2: 'value2a' });
csvStream.write({ header1: 'value1a', header2: 'value2a' });
csvStream.write({ header1: 'value1a', header2: 'value2a' });
csvStream.write({ header1: 'value1a', header2: 'value2a' });
csvStream.end();

// Output:
// header1,header2
// value1a,"value2a"
// value1a,"value2a"
// value1a,"value2a"
// value1a,"value2a"
