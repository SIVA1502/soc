var fs = require('fs');
var out_data = '\nOutput line 1.\r\nOutput line 2.\r\nOutput last line.';

fs.writeFileSync('output.txt', out_data);
console.log('Sync output file content: ' + out_data);

console.log('Program Ended.');