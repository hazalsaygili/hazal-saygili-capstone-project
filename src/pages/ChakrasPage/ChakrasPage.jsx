import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ChakrasPage.scss";
import chakrasData from "../../data/Chakras.json";

const ChakrasPage = () => {
  const { chakraName } = useParams();
  const [selectedChakra, setSelectedChakra] = useState(null);

  useEffect(() => {
    if (chakraName) {
      const chakra = chakrasData.find(
        (c) => c.name.toLowerCase() === chakraName.toLowerCase()
      );
      setSelectedChakra(chakra || null);
    } else {
      setSelectedChakra(null);
    }
  }, [chakraName]);

  return (
    <div className="chakras__container">
      <div className="chakras__hero">
        <div className="chakras__sidebar">
          <div className="chakras__button-container">
            {chakrasData.map((chakra) => (
              <Link
                key={chakra.name}
                to={`/chakras/${chakra.name.toLowerCase()}`}
                className="chakra__button-link"
              >
                <button
                  className="chakra__button"
                  style={{ backgroundColor: chakra.color }}
                ></button>
              </Link>
            ))}
          </div>
        </div>

        <div className="chakras__content">
          {!selectedChakra ? (
            <>
              <h2>Chakras Overview</h2>
              <p>
                Chakras are the energy centers in our body through which energy
                flows. There are seven main chakras, which align the spine,
                starting from the base of the spine through to the crown of the
                head. Each chakra represents different aspects of our physical,
                emotional, and spiritual well-being. Balancing these chakras can
                lead to a harmonious and fulfilling life.
              </p>
              <h3>Importance of Chakras:</h3>
              <ul>
                <li>
                  <strong>Physical Health:</strong> Balanced chakras promote
                  optimal physical functioning and vitality.
                </li>
                <li>
                  <strong>Mental Clarity:</strong> Aligning chakras helps in
                  achieving mental clarity and focus.
                </li>
                <li>
                  <strong>Emotional Stability:</strong> A balanced chakra system
                  leads to emotional stability and resilience.
                </li>
                <li>
                  <strong>Spiritual Growth:</strong> Chakras are key to
                  spiritual awakening and enlightenment.
                </li>
              </ul>
              <p>
                Click on any chakra on the left to learn more about its
                functions, associated crystals, and mudras.
              </p>
            </>
          ) : (
            <>
              <h2 style={{ color: selectedChakra.color }}>
                {selectedChakra.name} ({selectedChakra.indianName})
              </h2>
              <div className="chakra__description">
                <p>{selectedChakra.description}</p>
                <h3>Related Crystals:</h3>
                <div className="chakra__crystals">
                  {(selectedChakra.crystals || []).map((crystal, index) => (
                    <div
                      key={index}
                      className="chakra__crystal"
                      style={{
                        borderColor: selectedChakra.color,
                        color: selectedChakra.color,
                      }}
                    >
                      {crystal}
                    </div>
                  ))}
                </div>
              </div>

              <div className="chakras__mudras">
                <h3>Mudras for {selectedChakra.name}:</h3>
                <div className="chakra__mudras-list">
                  {(selectedChakra.mudras || []).map((mudra, index) => (
                    <div
                      key={index}
                      className="chakra__mudra"
                      style={{
                        borderColor: selectedChakra.color,
                        color: selectedChakra.color,
                      }}
                    >
                      <img src={mudra.url} alt={mudra.name} />
                      <p>{mudra.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChakrasPage;
