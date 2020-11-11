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

When(/^manager puts in username "([^"]*)"$/, function(arg1) {
    return driver.findElement(By.name('email')).sendKeys(arg1);
});

When(/^manager puts in password "([^"]*)"$/, function(arg1) {
    return driver.findElement(By.name('password')).sendKeys(arg1);
});

When('manager clicks submit', function (){
    if(driver.get('https://hudson-chesterfield-41002.herokuapp.com/login')){
        console.log("Incorrect credentials");
    }
    return driver.findElement(By.id('submitButton')).click();
});

When('manager goes to MML page', async function (){
    await driver.get('https://hudson-chesterfield-41002.herokuapp.com/mml/create/');
});

Then(/^there should be form "([^"]*)" that manager can enter info in$/, function(arg1){
    return driver.findElement(By.id(arg1));
});

When('manager goes to MAL page', async function (){
    await driver.get('https://hudson-chesterfield-41002.herokuapp.com/mal/create/');
});

Given('I have logged onto the DBMS website', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get('https://hudson-chesterfield-41002.herokuapp.com/mal/entry/4');
  });

When(/^admin puts "([^"]*)" into legal association name$/, function(arg1) {
    return driver.findElement(By.name('LegalName')).sendKeys(arg1);
});

When('admin clicks update entry supplemental information button', function (){
    return driver.findElement(By.id('UpdateEntryInfoButton')).click();
});

