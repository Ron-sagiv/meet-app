import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  //===================Scenario 1==========================
  test('When user has not specified a number, 32 events are shown by default.', ({
    given,
    when,
    then,
  }) => {
    given(
      'the user has not specified the number of events to display',
      () => {},
    );

    when('the user views the events list', () => {});

    then(/^(\d+) events should be displayed by default$/, (arg0) => {});
  });
  //===================Scenario 2=========================================
  test('User can change the number of events displayed.', ({
    given,
    when,
    then,
  }) => {
    given('the user is viewing the events list', () => {});

    when('the user specifies a number of events to display', () => {});

    then(
      'the events list should update to show the selected number of events',
      () => {},
    );
  });
});
