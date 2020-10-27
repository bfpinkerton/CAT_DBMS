Feature: Let admins access register user route
    As an admin
    So that admins can access admin only content

    Scenario: admins access register user route
        Given I have visited the Selenium official web page on www.selenium.dev
        Then admin puts in username and password
        Then admin clicks on submit
        Then admin clicks on taskbar
        Then admin sees register new users button