import React, { useState } from 'react';
import DropdownMenu from './dropdownMenu';

const Home = () => {
  const options = [
    { label: 'Option 1', image: 'url_to_image_1' },
    { label: 'Option 2', image: 'url_to_image_2' },
    { label: 'Option 3', image: 'url_to_image_3' },
    { label: 'Option 4', image: 'url_to_image_4' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    // Perform action with the selected option
    console.log('Submitted:', selectedOption);
  };

  return (
    <div>
      <h1>Select Design:</h1>
      <DropdownMenu options={options} onSelect={handleSelect} />
      {selectedOption && (
        <div>
          <p>Selected Option: {selectedOption.label}</p>
          <img src={selectedOption.image} alt={selectedOption.label} />
          <button onClick={handleSubmit}>Compare</button>
          <p>
            <a href="#" onClick={() => console.log('Add new design clicked!')}>
              Click here,
            </a>{' '}
            to add a new design.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;