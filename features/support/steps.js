const { Given, When, Then } = require("cucumber");
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const assert = require("assert").strict
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I have visited the Selenium official web page on www.selenium.dev', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get('http://www.google.com');
  });

When("I increment the variable by {int}", function(number) {
  this.incrementBy(number);
});

Then("the variable should contain {int}", function(number) {
  assert.equal(this.variable, number);
});