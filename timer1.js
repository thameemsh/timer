const input =  process.argv.slice(2)

for(let i of input) {
if(!(i < 0) && Number.isInteger(Number(i))) {
    setTimeout(() => {process.stdout.write(".");}, i*1000);
  }
}

// process.stdout.write("\x07") // Not beeping in my system