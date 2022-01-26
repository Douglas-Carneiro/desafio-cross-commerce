# Solution for the Cross Commerce Dev Challenge (Douglas Carneiro)

## Installing the dependencies ##
To install the dependecies just run `npm install` at the root folder of the project

## Testing ##
To run the tests execute the command `npm run test` in the terminal at the root folder of the project

## Running the application ##
To run the application simply run `npm start` at the root folder of the project

## Explaining the file structure ##

**index.js** - is the main file where the main operations happen, this is file where the ETL pipeline is located

**quicksort.js** - is the module contaning the sorting algorithm QuickSort used for transforming the data

**app.js** - is the file containing the Express REST API that serves the sorted numbers

**file_operations.js** - contains the input/output helper functions to save and load numbers from files

**sorted_numbers.txt** - is the result of the extract & transform steps

**test.txt** - is a file used for tests

**/tests** - is the folder containing all the test files