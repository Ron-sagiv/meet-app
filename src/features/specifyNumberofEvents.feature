# Feature 3 specify Number of Events

Feature: Specify Number of Events


   Scenario: When user has not specified a number, 32 events are shown by default. 
     Given the user has not specified the number of events to display
     When the user views the events list
     Then 32 events should be displayed by default

   Scenario: User can change the number of events displayed. 
     Given the user is viewing the events list
     When the user specifies a number of events to display
     Then the events list should update to show the selected number of events