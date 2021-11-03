// const key =  process.argv.slice(2)

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {

  if (key > 0 && key < 10) {
    process.stdout.write("setting timer for x seconds...\n");
    setTimeout(() => {process.stdout.write(".\n");}, key*1000);
  }
  if (key === 'b') {
    process.stdout.write('.\n');
  }
  if (key === '\u0003') {  // Telnet Keyboard Equivalents for Ctrl + c
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
});


