/*'use strict';

const assert = require("assert");
const {Given, When, Then}= require("cucumber");
const webdriver = require('selenium-webdriver');


this.Given(/^I have visited the Selenium official web page on "([^"]*)"$/, function (url, next) {
    
  this.driver.get('https://www.selenium.dev').then(next);
    callback(null, 'pending');
  });

Then("I should be on the {string} page", async function(string) {
  const el = await this.page.waitForSelector('[data-test="${string}"]');
  return !!el;
});

Given("I am on the {string} page", function(string) {
  switch(string){
    case "login": 
      return this.page.goto("https://hudson-chesterfield-41002.herokuapp.com/");

    default:
      throw new Error ('${string} is not a supported name page');
  }
});*/
/*When(/^admin goes to login page$/) do
  visit "https://hudson-chesterfield-41002.herokuapp.com/"
end
Then(/^admin puts in username and password$/) do
  fill_in 'input', with: 'test@test.com'
  fill_in 'input', with: '123'
end 
Then(/^admin clicks on submit$/) do
  click_button('Submit')
end
Then(/^admin clicks on taskbar$/) do
  click_button('leftside-sidebar-toggle')
end 
Then(/^Then admin sees register new users button$/) do
  page.has_content?('Register New User')
end*/
