const stdin = process.stdin;
const stdout = process.stdout;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');
// const arr = [0, 1, 3, 4, 5, 6, 7, 8, 9];

stdin.on('data', (key) => {
  if (Number(key)){
    stdout.write(`setting timer for ${key} seconds...`)
    setTimeout(() => {
      stdout.write('\x07');
      stdout.write('\n');
    }, key * 1000)
  }
  if (key === 'b'){
    stdout.write('\x07');
  } 
  if (key === ('\u0003')){
    stdout.write("Thanks for using me, Ciao!!")
    stdout.write('\n');
    process.exit();
  }
})