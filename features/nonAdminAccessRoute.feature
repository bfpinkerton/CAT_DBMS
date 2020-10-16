Feature: Non admins shouldn't access register user route
    As an admin
    So that non admins can't access register user routes.

    Scenario: admins access register user route
    When nonadmin goes to login page
    Then non admin puts in username and password
    Then non admin clicks on submit
    Then non admin clicks on taskbar
    Then non admin does not see register new users button