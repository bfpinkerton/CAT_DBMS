Feature: Let managers update MAL entry
    As an manager
    So that manager can update admin only content

    Scenario: admins update MAL entry
        When manager goes to MAL page
        When admin puts "John Doe" into legal association name
        When admin clicks update entry supplemental information button