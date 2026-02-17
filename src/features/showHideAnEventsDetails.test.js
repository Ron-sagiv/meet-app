import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let eventListItems;

    given('the user is viewing the events list', async () => {
      render(<App />);
    });

    when('the events are displayed', async () => {
      eventListItems = await screen.findAllByRole('listitem');
    });

    then(
      'each event should be shown with only its title and minimal information',
      () => {
        eventListItems.forEach((event) => {
          const details = within(event).queryByTestId('event-details');
          expect(details).not.toBeInTheDocument();
        });
      },
    );
  });

  // ================================ Scenario 2 =================================
  test('User can expand an event to see details.', ({ given, when, then }) => {
    let event;
    let user = userEvent.setup();

    given(
      'the user is viewing a collapsed event in the events list',
      async () => {
        render(<App />);
        const events = await screen.findAllByRole('listitem');
        event = events[0];

        expect(
          within(event).queryByTestId('event-details'),
        ).not.toBeInTheDocument();
      },
    );

    when('the user clicks on an event', async () => {
      const showDetailsButton = within(event).getByRole('button', {
        name: /show details/i,
      });
      await user.click(showDetailsButton);
    });

    then('the event details should be expanded and displayed', () => {
      expect(within(event).getByTestId('event-details')).toBeInTheDocument();
    });
  });

  // ================================ Scenario 3 =================================
  test('User can collapse an event to hide details.', ({
    given,
    when,
    then,
  }) => {
    let event;
    let user = userEvent.setup();

    given('the user has expanded an event to see its details', async () => {
      render(<App />);
      const events = await screen.findAllByRole('listitem');
      event = events[0];

      const showDetailsButton = within(event).getByRole('button', {
        name: /show details/i,
      });
      await user.click(showDetailsButton);

      expect(within(event).getByTestId('event-details')).toBeInTheDocument();
    });

    when('the user clicks to collapse the event', async () => {
      const hideDetailsButton = within(event).getByRole('button', {
        name: /hide details/i,
      });
      await user.click(hideDetailsButton);
    });

    then('the event details should be hidden', () => {
      expect(
        within(event).queryByTestId('event-details'),
      ).not.toBeInTheDocument();
    });
  });
});
