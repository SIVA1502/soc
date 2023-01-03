var fs = require('fs');
var in_data;

fs.readFile('./input.txt', (err, data) => {
	if (err) return console.error(err);
	in_data = data;
	console.log('Async input file content: ' + in_data);
});

console.log(in_data);

console.log('Program Ended.');

setTimeout(()=> {
  console.log("in timeout function")
}, 3000)