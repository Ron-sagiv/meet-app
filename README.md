# Meet App

## Overview

**Meet App** is a serverless, progressive web application (PWA) built with **React** using a **test-driven development (TDD)** approach. The application allows users to discover upcoming events by city using data fetched from the **Google Calendar API**. It works online and offline, can be installed on desktop and mobile devices, and includes data visualizations to help users better understand event distribution.

This project demonstrates modern web development practices, including serverless architecture, PWAs, automated testing, and data visualization.

---

## Objective

The goal of this project is to build a high-quality, scalable, and user-friendly event discovery application that:

- Uses **serverless functions** for backend logic
- Works **offline** and under poor network conditions
- Follows **TDD** to ensure reliability and maintainability
- Provides **data visualizations** for better insights
- Meets **Lighthouse PWA standards**
- Is deployable and shareable via **GitHub Pages**

---

## The 5 Ws

- **Who**: Anyone looking to explore upcoming events (developers, recruiters, friends, or professional networks).
- **What**: A React-based progressive web application with offline support and a serverless backend.
- **When**: Anytime users want to check upcoming events in a specific city.
- **Where**: Hosted online with serverless cloud functions and usable across devices, even offline.
- **Why**: To showcase skills in serverless architecture, PWAs, TDD, and data visualization while delivering a high-quality user experience.

---

## Key Features

- Filter events by city
- Show and hide event details
- Specify the number of events displayed
- Use the app offline
- Add the app to the home screen
- Visualize event data with charts

---

## User Stories & Scenarios

### Feature 1: Filter Events by City

#### Scenario 1: Display events from all cities by default

**User Story:**  
As a user,  
I want to see upcoming events from all cities when I haven’t searched for a specific city,  
So that I can explore events without needing to choose a city first.

**Expected Behavior:**  
When the user opens the app without entering a city, a list of upcoming events from all available cities is displayed.

---

#### Scenario 2: Show city suggestions while typing

**User Story:**  
As a user,  
I want to see a list of suggested cities while typing in the city search field,  
So that I can quickly find and select the city I’m looking for.

**Expected Behavior:**  
As the user types into the city search field, a list of matching city suggestions appears.

---

#### Scenario 3: Select a city from suggestions

**User Story:**  
As a user,  
I want to select a city from the suggested list,  
So that I can view upcoming events specific to that city.

**Expected Behavior:**  
When a user selects a city from the suggestion list, the selected city becomes active and the event list updates to show only events from that city.

---

### Feature 2: Show / Hide Event Details

#### Scenario 1: Events are collapsed by default

**User Story:**  
As a user,  
I want to see a list of events with only titles and minimal information,  
So that I can quickly scan and decide which events interest me.

**Expected Behavior:**  
Each event in the list is displayed in a collapsed state showing only basic information.

---

#### Scenario 2: Expand an event to see details

**User Story:**  
As a user,  
I want to expand an event to see more information,  
So that I can learn more about the event before deciding to attend.

**Expected Behavior:**  
When the user clicks on an event, additional details such as description, location, and time are displayed.

---

#### Scenario 3: Collapse an event to hide details

**User Story:**  
As a user,  
I want to hide expanded event details,  
So that I can keep the event list clean and easy to browse.

**Expected Behavior:**  
When the user collapses an expanded event, the additional details are hidden again.

---

### Feature 3: Specify Number of Events

#### Scenario 1: Default number of events

**User Story:**  
As a user,  
I want to see a default list of events without configuring settings,  
So that I can immediately browse upcoming events.

**Expected Behavior:**  
If the user does not specify a number, **32 events** are displayed by default.

---

#### Scenario 2: Change number of displayed events

**User Story:**  
As a user,  
I want to choose how many events are displayed,  
So that the amount of information fits my browsing preference.

**Expected Behavior:**  
When the user selects a different number of events, the event list updates accordingly.

---

### Feature 4: Use the App When Offline

#### Scenario 1: Display cached data offline

**User Story:**  
As a user,  
I want to access the events list while offline,  
So that I can browse events anytime and anywhere.

**Expected Behavior:**  
When there is no internet connection, previously cached events are displayed.

---

#### Scenario 2: Show error when changing settings offline

**User Story:**  
As a user,  
I want to see an error message when I try to change search settings while offline,  
So that I understand why the data cannot be updated.

**Expected Behavior:**  
If the user changes the city or number of events while offline, an error message indicates that the app cannot update without an internet connection.

---

### Feature 5: Add an App Shortcut to the Home Screen

#### Scenario 1: Install app on home screen

**User Story:**  
As a user,  
I want to add the app to my home screen,  
So that I can access it faster and more easily.

**Expected Behavior:**  
On supported devices, the user can install the app, creating a shortcut on the home screen.

---

### Feature 6: Display Charts Visualizing Event Details

#### Scenario 1: Show events per city chart

**User Story:**  
As a user,  
I want to see a visual representation of how many upcoming events exist in each city,  
So that I can easily compare cities and choose where to explore events.

**Expected Behavior:**  
A chart is displayed showing the number of upcoming events per city.

---

## Technical Requirements

- Built with **React**
- Developed using **Test-Driven Development (TDD)**
- Uses **Google Calendar API** with **OAuth2 authentication**
- Backend powered by **serverless functions** (AWS Lambda preferred)
- Hosted on **GitHub** and deployed via **GitHub Pages**
- Fully responsive (320px to 1920px screen widths)
- Compatible with modern browsers and IE11
- Passes **Lighthouse PWA** checks
- Supports offline usage via a **service worker**
- Installable as a PWA on desktop and mobile
- Includes an **OOP-based alert system**
- Implements **data visualization**
- Test coverage of **90% or higher**
- Monitored using an online performance monitoring tool

---

## Deployment

The application is deployed on **GitHub Pages** and can be installed as a Progressive Web App on supported devices.

---

## License

This project is for educational and portfolio purposes.
