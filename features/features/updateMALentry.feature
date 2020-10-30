Feature: Let admins update register user route
    As an admin
    So that admins can update admin only content

    Scenario: admins access register user route
        Given I have logged onto the DBMS website
        When admin puts "5" into # of directors when fully staffed
        When admin clicks submit
        Then entry appears in representation inquiry