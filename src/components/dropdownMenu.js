// DropdownMenu.js

import React, { useState, useEffect, useRef } from 'react';
import '../css/dropdownMenu.css';

const DropdownMenu = ({ options, onSelect }) => {
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const handleInputChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(term)
    );
    setFilteredOptions(filtered);
    setDropdownVisible(true);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onClick={() => setDropdownVisible(true)}
      />
      {dropdownVisible && (
        <ul className="options">
          {filteredOptions.map((option) => (
            <li
              key={option.label}
              onClick={() => handleSelectOption(option)}
              className={selectedOption === option ? 'selected' : ''}
            >
              {option.image && (
                <img src={option.image} alt={option.label} className="option-image" />
              )}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;