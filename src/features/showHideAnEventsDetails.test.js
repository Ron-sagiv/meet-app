import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    //================Scenario 1=======================================
    given('the user is viewing the events list', () => {});

    when('the events are displayed', () => {});

    then(
      'each event should be shown with only its title and minimal information',
      () => {},
    );
  });
  //================Scenario 2=======================================
  test('User can expand an event to see details.', ({ given, when, then }) => {
    given('the user is viewing a collapsed event in the events list', () => {});

    when('the user clicks on an event', () => {});

    then('the event details should be expanded and displayed', () => {});
  });
  //================Scenario 3=======================================
  test('User can collapse an event to hide details.', ({
    given,
    when,
    then,
  }) => {
    given('the user has expanded an event to see its details', () => {});

    when('the user clicks to collapse the event', () => {});

    then('the event details should be hidden', () => {});
  });
});
