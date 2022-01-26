const quickSort = require('../quicksort')

describe('QuickSort', () => {
  test('sorts elements correctly', () => {
    const array = [2, 56, 6, -1, 0, 57, 88]
    const result = quickSort(array, 0, array.length - 1)

    expect(result).toEqual([-1, 0, 2, 6, 56, 57, 88])
  })

  test('works with float numbers', () => {
    const floats = [2.35, 66.777, 6.35, -1.0, 0.1, 55.22, 88.1]
    const result = quickSort(floats, 0, floats.length - 1)

    expect(result).toEqual([-1.0, 0.1, 2.35, 6.35, 55.22, 66.777, 88.1])
  })
})