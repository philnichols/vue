# Learn TDD in Vue

A sample project demonstrating how to do Test-Driven Development in Vue with Cypress.

## Usage

This repo shows the process of going from an empty Vue app to a single complete feature built via TDD: the ability enter a message and have it show in the list. To follow along with the TDD process, view the commit history for the repo. Each step either adds a failing test (red), or adds production code that gets past an error message or causes the test to pass (green). You can `checkout` any commit to see the state of the codebase at that time and run the tests yourself.

## Installation

* `git clone https://github.com/learn-tdd-in/vue.git learn-tdd-in-vue`
* `cd learn-tdd-in-vue`
* `npm install`

## Running / Development

* To run the app, run `npm run dev` then go to `http://localhost:8080`
* To run the tests, first start the app. Then in another tab run `npm run cypress:open`, then click "Run All Tests".

## Contributing

We welcome contributions to this repo and any other part of Learn TDD! See the Learn TDD [Contributing page](http://learntdd.in/contribute) for info.

## License

MIT. For more info, see `LICENSE.txt`.
