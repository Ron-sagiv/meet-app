// src/App.jsx

import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import mockData from './mock-data';
import { extractLocations } from './api';
import NumberOfEvents from './components/NumberOfEvents';

const App = () => {
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [currentNOE, setCurrentNOE] = useState(32);

  useEffect(() => {
    const filteredEvents =
      currentCity === 'See all cities'
        ? mockData
        : mockData.filter((event) => event.location === currentCity);

    setEvents((filteredEvents || []).slice(0, currentNOE));
    setAllLocations(extractLocations(mockData));
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />
      <EventList events={events} />
    </div>
  );
};

export default App;
