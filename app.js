require('dotenv').config()
const express = require('express')
const app = express()
const { getNumbersFromFile } = require('./file_operations')

console.log('Loading the sorted numbers from the file...\n')
let numbers = []

if (process.env.NODE_ENV === 'test') {
  numbers = getNumbersFromFile('test.txt')
} else {
  numbers = getNumbersFromFile('sorted_numbers.txt')
}

console.log(`Got ${numbers.length} numbers from the file`)

app.use(express.json())

app.get('/api/numbers', (request, response) => {
  
  let page = request.query.page
  let numbersPerPage = 100

  if (!page) {
    // return the results of the first page only if the page is omitted
    return response.json(numbers.slice(0, numbersPerPage))
  } else {
    parsedPage = Number.parseInt(page)
    if (Number.isNaN(parsedPage) || (parsedPage < 0)) {
      return response.status(401).json({ error: 'page should be a valid positive integer number' })
    } else {
      if ((parsedPage * numbersPerPage) > numbers.length) {
        return response.json([])
      }
      return response.json(numbers.slice((parsedPage - 1) * numbersPerPage, parsedPage * numbersPerPage))
    }
  }
})

module.exports = app