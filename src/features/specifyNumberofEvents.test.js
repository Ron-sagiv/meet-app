import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  // =================== Scenario 1 ==========================
  test('When user has not specified a number, 32 events are shown by default.', ({
    given,
    when,
    then,
  }) => {
    let eventItems;

    given('the user has not specified the number of events to display', () => {
      render(<App />);
    });

    when('the user views the events list', async () => {
      eventItems = await screen.findAllByRole('listitem');
    });

    then(/^(\d+) events should be displayed by default$/, (number) => {
      expect(eventItems.length).toBe(Number(number));
    });
  });

  // =================== Scenario 2 ==========================
  test('User can change the number of events displayed.', ({
    given,
    when,
    then,
  }) => {
    let user = userEvent.setup();
    let numberInput;

    given('the user is viewing the events list', async () => {
      render(<App />);

      const numberOfEventsContainer =
        document.querySelector('#number-of-events');

      numberInput = within(numberOfEventsContainer).getByRole('textbox');
    });

    when('the user specifies a number of events to display', async () => {
      await user.clear(numberInput);
      await user.type(numberInput, '10');
    });

    then(
      'the events list should update to show the selected number of events',
      async () => {
        const eventItems = await screen.findAllByRole('listitem');
        expect(eventItems.length).toBe(10);
      },
    );
  });
});
