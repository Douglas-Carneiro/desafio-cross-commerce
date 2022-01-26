const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const isSorted = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i+1]) {
      return false
    }
  }
  return true
}

test('numbers are returned as json', async () => {
  await api
    .get('/api/numbers')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('numbers are sorted', async () => {
  const response = await api.get('/api/numbers')
  const numbers = response.body
  
  expect(isSorted(numbers)).toBe(true)
})