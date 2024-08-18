import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import CrystalsData from '../../data/Crystals.json';
import ChakrasData from '../../data/Chakras.json';
import './CrystalsPage.scss';

const CrystalsPage = () => {
  const { crystalName } = useParams();
  const [crystals] = useState(CrystalsData);
  const [chakras] = useState(ChakrasData);
  const [selectedCrystal, setSelectedCrystal] = useState(null);

  console.log(CrystalsData);

  useEffect(() => {
    const crystal = crystals.find(c => c.name.toLowerCase() === crystalName.toLowerCase());
    setSelectedCrystal(crystal);
  }, [crystalName, crystals]);

  const getChakraColor = (chakraName) => {
    const chakra = chakras.find(ch => ch.ChakraName.toLowerCase() === chakraName.toLowerCase());
    return chakra ? chakra.ChakraColor : '#ffffff'; // Fallback color
  };

  return (
    <div className="crystals-page">
      <aside className="crystals-page__sidebar">
        <h2>Crystal Directory</h2>
        <ul>
          {crystals.map(crystal => (
            <li key={crystal.name}>
              <NavLink
                to={`/crystals/${crystal.name.toLowerCase()}`}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {crystal.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
      <main className="crystals-page__main">
        {selectedCrystal ? (
          <>
            <h1 className="crystals-page__title">{selectedCrystal.name}</h1>
            <div className="crystals-page__content">
              <img src={selectedCrystal.image} alt={selectedCrystal.name} className="crystals-page__image" />
              <div className="crystals-page__details">
                <p><strong>Description:</strong></p>
                <p>{selectedCrystal.description}</p>
                <p>
                  <strong>Related Chakras:</strong>
                  {selectedCrystal.relatedChakras.map(chakra => (
                    <NavLink
                      key={chakra}
                      to={`/chakras/${chakra.toLowerCase()}`}
                      className="chakra-link"
                      style={{ color: getChakraColor(chakra) }}
                    >
                      {chakra}
                    </NavLink>
                  ))}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="crystals-page__intro">
            <h1>Crystals Overview</h1>
            <p>Learn about the various crystals, their uses, and their connections to chakras. Select a crystal from the list on the left to get detailed information.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CrystalsPage;
