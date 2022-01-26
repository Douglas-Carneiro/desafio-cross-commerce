const axios = require('axios')
const quickSort = require('./quicksort')
const { saveNumbersToFile } = require('./file_operations')
const app = require('./app')
const http = require('http')

let allNumbers = []

// Consumes the API while the numbers array !== []
// It's fault tolerant because it only advances the page counter if it gets a response
const extract = async () => {
  let page = 1
  let response = {}
  
  console.log('Fetching numbers from the API...\n')
  do {
    try {
      response = await axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${page}`)
      console.log('Current page: ', page)
      console.log('Total of numbers in the page: ', response.data.numbers.length)
      allNumbers.push(...response.data.numbers)
      page++
    } catch (error) {
      console.log('Error: ', error)
    }
  } while (response.data.numbers.length !== 0)

  console.log('\n ----- Results -----')
  console.log('Total number of pages: ', page-2)
  console.log('Total of numbers: ', allNumbers.length)
}

const transform = () => {
  console.log('\nSorting numbers...')
  quickSort(allNumbers, 0, allNumbers.length - 1)
  console.log('Numbers sorted')

  // Save the sorted numbers to a file, so that they are readily available 
  // without the need to fetch from the api and sort them again
  console.log('\nSaving numbers to file...')
  saveNumbersToFile(allNumbers, 'sorted_numbers.txt')
  return
}

const load = () => {
  const server = http.createServer(app)
  
  server.listen(3000, () => {
    console.log('\nServer running on port 3000')
  })
}

const main = async () => {
  await extract()
  transform()
  load()
}

main()