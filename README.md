<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  Playwright Web Automation - README
</head>
<body>

<h1 align="center">Playwright Web Automation</h1>
<br>

## About ##

This project contains Web automation tests for the Mitigram application  for the Login and Career page  using Playwright.

## Project Structure ##

![image](https://github.com/shivanigoel/MitigramWebAutomation/assets/27926245/2fa3835d-f410-4e90-b19f-88c2ed6619f8)



## Technologies ##

The following technologies are used in this project:

- [Playwright](https://playwright.dev/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [axios]

## Prerequisites ##

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Setup ##

1. Clone the repository:

```bash
git clone https://github.com/shivanigoel/MitigramWebAutomation.git
cd playwrightwebautomation


:bulb: Contribute
Contributions are welcome! Follow these steps:

Fork the repository
Make changes to the codebase
Write or update test cases
Ensure all tests are passing
Submit a pull request explaining your changes

## Test ##

# Run all tests using the default(chromium) browser
$ npx playwright test

# Run all tests in all Chrome browsers headless
$ npm test --project=chromium

# Run individual class
$ npx playwright test ClassName.spec.js --project chromium
