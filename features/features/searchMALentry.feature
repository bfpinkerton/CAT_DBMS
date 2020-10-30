Feature: Let admins access register user route
    As an admin
    So that admins can access admin only content

    Scenario: admins access register user route
        Given I have logged onto the DBMS website
        When admin puts in username "test@test.com"
        When admin puts in password "123"
        When admin clicks submit
        When admin searches for an entry
        Then entry appears in representation inquiry