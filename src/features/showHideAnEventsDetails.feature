# Feature 2 Show/Hide Event Details

Feature: Show/Hide Event Details


    Scenario: An event element is collapsed by default.
      Given the user is viewing the events list
      When the events are displayed
      Then each event should be shown with only its title and minimal information

    Scenario: User can expand an event to see details. 
      Given the user is viewing a collapsed event in the events list
      When the user clicks on an event
      Then the event details should be expanded and displayed

    Scenario: User can collapse an event to hide details. 
      Given the user has expanded an event to see its details
      When the user clicks to collapse the event
      Then the event details should be hidden