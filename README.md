# frontend-testing-comparative
A comparative between the most important frontend testing frameworks

The main purpose of this comparative is to find what testing tool best fits my needs.
I want to perform the following validations during the development process:
1. Unit Testing
2. Integration Testing
3. E2E testing
4. CSS regression testing

**The selected frameworks are**
1. Intern.js
2. Webdriver IO


**Instructions**
1. download [Selenium](http://www.seleniumhq.org/) (I've used 2.53.1 Standalone Server)
2. download browsers WebDriver and put them in the selenium jar directory
3. run '_npm install_'
4. run '_bower install_'
5. run tests!!

To run intern.js tests (assuming that you are in the project folder):
- run 'node_modules\.bin\intern-runner config=intern_tests\intern.js'

To run WebdriverCSS tests:
- run 'node CSSRegression.js'
You can also use the admin panel installing [WebdriverCSS Admin Panel](https://github.com/scosmaa/webdrivercss-adminpanel)

