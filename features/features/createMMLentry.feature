Feature: Create a page for managers to enter in MML
    As an manager
    So that managers can enter in information to the system

    Scenario: admins access register user route
        Given I have logged onto the DBMS website
        When manager puts in username "test@test.com"
        When manager puts in password "123"
        When manager clicks submit
        When manager goes to MML page
        Then there should be form "userInitials" that manager can enter info in