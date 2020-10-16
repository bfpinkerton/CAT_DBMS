var setWorldConstructor = Cucumber.setWorldConstructor;
var Given = Cucumber.Given;
var When = Cucumber.When;
var Then = Cucumber.Then;

When(/^admin goes to login page at {}/, function (url, next) {
    this.driver.get('https://hudson-chesterfield-41002.herokuapp.com/login').then(next);
});

Given('a variable set to {int}', function(number) {
  this.setTo(number);
});