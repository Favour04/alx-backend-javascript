process.stdin.setEncoding('utf8');
process.stdout.write('Welcome to ALX, what is your name? \n')
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('Your name is: ' + chunk);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing \n');
});