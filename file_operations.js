const fs = require('fs');

const saveNumbersToFile = (array, filename) => {
  let writeStream = fs.createWriteStream(filename);
  let pathName = writeStream.path;

  // write each number to the file
  array.map(item => {
    writeStream.write(`${item}\n`)
  })
  
  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on('finish', () => {
     console.log(`wrote all the array data to file ${pathName}`);
  });
  
  // handle the errors on the write process
  writeStream.on('error', (err) => {
      console.error(`There is an error writing the file ${pathName} => ${err}`)
  });
  
  // close the stream
  writeStream.end();
}

const getNumbersFromFile = (filename) => {
  let all

  try {
    all = fs.readFileSync(filename, 'utf8')
  } catch (error) {
    console.log(error)
    return null
  }
  
  // remove any extra space and split the content line by line
  let textByLine = all.trim().split('\n')
  let numbers = []

  // transforms each item to a number and inserts the number in the array
  textByLine.map(item => {
    numbers.push(Number.parseFloat(item))
  })

  return numbers
}

module.exports = { saveNumbersToFile, getNumbersFromFile }