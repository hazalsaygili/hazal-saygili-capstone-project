import React, { useState } from 'react';
import './ChakrasPage.scss';
import chakrasData from '../../data/Chakras.json';

const ChakrasPage = () => {
  const [selectedChakra, setSelectedChakra] = useState(chakrasData[0]);

  const handleChakraClick = (chakra) => {
    setSelectedChakra(chakra);
  };

  return (
    <div className="chakras__container">
      <div className="chakras__hero">
        {/* Left Side: Chakra Selector */}
        <div className="chakras__sidebar">
          {chakrasData.map((chakra, index) => (
            <button
              key={index}
              className="chakra__button"
              style={{ backgroundColor: chakra.ChakraColor }}
              onClick={() => handleChakraClick(chakra)}
            >
              {chakra.ChakraName}
            </button>
          ))}
        </div>

        {/* Right Side: Chakra Details */}
        <div className="chakras__content">
          <h2>{selectedChakra.ChakraName} ({selectedChakra.ChakraIndianName})</h2>
          <div className="chakra__description">
            <p>{selectedChakra.ChakraDescription}</p>
            <h3>Related Crystals:</h3>
            <div className="chakra__crystals">
              {(selectedChakra.ChakraCrystals || []).map((crystal, index) => (
                <div
                  key={index}
                  className="chakra__crystal"
                  style={{
                    borderColor: selectedChakra.ChakraColor,
                    color: selectedChakra.ChakraColor,
                  }}
                >
                  {crystal}
                </div>
              ))}
            </div>
          </div>

          {/* New Section for Mudras */}
          <div className="chakras__mudras">
            <h3>Mudras for {selectedChakra.ChakraName}:</h3>
            <div className="chakra__mudras-list">
              {(selectedChakra.ChakraMudras || []).map((mudra, index) => (
                <div key={index} className="chakra__mudra">
                  <img src={mudra.url} alt={mudra.name} />
                  <p>{mudra.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChakrasPage;
