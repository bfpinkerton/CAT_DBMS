const { Given, When, Then } = require("cucumber");
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const assert = require("assert").strict
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const { elementIsDisabled } = require("selenium-webdriver/lib/until");
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I have logged onto the DBMS website', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get('https://hudson-chesterfield-41002.herokuapp.com/mal/entry/4');
  });

When(/^admin puts in username "([^"]*)"$/, function(arg1) {
    return driver.findElement(By.name('email')).sendKeys(arg1);
});

When(/^admin puts in password "([^"]*)"$/, function(arg1) {
    return driver.findElement(By.name('password')).sendKeys(arg1);
});

When('admin clicks submit', function (){
    return driver.findElement(By.id('submitButton')).click();
});
