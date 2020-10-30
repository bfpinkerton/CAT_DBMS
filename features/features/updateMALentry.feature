Feature: Let admins update register user route
    As an admin
    So that admins can update admin only content

    Scenario: admins access register user route
        Given I have logged onto the DBMS website
        When admin puts "John Doe" into legal association name
        When admin clicks update entry supplemental information button
        Then entry appears in representation inquiry