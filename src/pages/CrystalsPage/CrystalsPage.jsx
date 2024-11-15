import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import CrystalsData from "../../data/Crystals.json";
import ChakrasData from "../../data/Chakras.json";
import "./CrystalsPage.scss";

const CrystalsPage = () => {
  const { crystalName } = useParams();
  const [crystals] = useState(CrystalsData);
  const [chakras] = useState(ChakrasData);
  const [selectedCrystal, setSelectedCrystal] = useState(null);

  useEffect(() => {
    if (crystalName) {
      const crystal = crystals.find(
        (c) => c.name.toLowerCase() === crystalName.toLowerCase()
      );
      setSelectedCrystal(crystal);
    } else {
      setSelectedCrystal(null);
    }
  }, [crystalName, crystals]);

  const getChakraColor = (chakraName) => {
    const chakra = chakras.find(
      (ch) => ch.name.toLowerCase() === chakraName.toLowerCase()
    );
    return chakra ? chakra.color : "#ffffff";
  };

  const getChakraRoute = (chakraName) => {
    const chakra = chakras.find((ch) =>
      ch.name.toLowerCase().includes(chakraName.toLowerCase())
    );
    return chakra
      ? `/chakras/${chakra.name.toLowerCase().replace(/\s+/g, "%20")}`
      : "#";
  };

  return (
    <div className="crystals-page">
      <aside className="crystals-page__sidebar">
        <h2>Crystal Library</h2>
        <ul>
          {crystals.map((crystal) => (
            <li key={crystal.name}>
              <NavLink
                to={`/crystals/${crystal.name.toLowerCase()}`}
                className={({ isActive }) => (isActive ? "active" : "")}
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
                <img
                  className = "crystals-page__image"
                  src={selectedCrystal.image}
                  alt={selectedCrystal.name}
                  style={{width: "41rem", height: "24rem", objectFit: 'fill', borderRadius: '0.5rem', marginBottom: '2rem'
                  }}
                />
              <div className="crystals-page__details">
                <p>
                  <strong>Description:</strong>
                </p>
                <p>{selectedCrystal.description}</p>
                <p>
                  <strong>Related Chakras: </strong>
                  {selectedCrystal.relatedChakras.map((chakra) => (
                    <NavLink
                      key={chakra}
                      to={getChakraRoute(chakra)}
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
            <h1>Crystals and Healing</h1>
            <p>
              Crystals have been used for centuries for their healing properties
              and energetic influences. Each crystal carries unique vibrations
              that can support balance, healing, and spiritual growth. Explore
              the crystals listed in the sidebar to learn more about their
              specific properties and their connections to the chakras.
            </p>
            <p>
              Select a crystal from the list on the left to view detailed
              information about its properties and uses.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CrystalsPage;
