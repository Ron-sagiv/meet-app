// src/components/NumberOfEvents.jsx
import PropTypes from 'prop-types';

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const handleInputChanged = (event) => {
    const value = Number(event.target.value);

    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="number"
        role="textbox"
        value={currentNOE}
        onChange={handleInputChanged}
      />
    </div>
  );
};

NumberOfEvents.propTypes = {
  currentNOE: PropTypes.number.isRequired,
  setCurrentNOE: PropTypes.func.isRequired,
};

export default NumberOfEvents;
