Feature: Let admins access register user route
    As an admin
    So that admins can access admin only content

    Scenario: admins access register user route
    When admin goes to login page at https://hudson-chesterfield-41002.herokuapp.com/login\
    Given a variable set to 1
    Then admin signs in to login page
    Then admin clicks on submit
    Then admin clicks on taskbar
    Then admin sees register new users button