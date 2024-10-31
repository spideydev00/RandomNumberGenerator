// src/components/RandomNumberGenerator.js
import React, { useState } from 'react';
import './RandomNumberGenerator.css';
import RandomNameGenerator from './RandomNameGenerator';

const RandomNumberGenerator = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [result, setResult] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [showNameGenerator, setShowNameGenerator] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Stato per il loader

  const [extractionCount, setExtractionCount] = useState(0);
  const [hasExtractedTwo, setHasExtractedTwo] = useState(false);
  const [hasExtractedThree, setHasExtractedThree] = useState(false);

  const specialNumbers = [2, 3];

  const generateRandomNumber = () => {
    setIsLoading(true); // Mostra il loader
    setTimeout(() => {
      let randomNumber = null;

      // Logica per estrarre 2 al 3° turno e 3 al 4° turno
      if (extractionCount === 2 && !hasExtractedTwo) {
        randomNumber = 2;
        setHasExtractedTwo(true);
      } else if (extractionCount === 3 && !hasExtractedThree) {
        randomNumber = 3;
        setHasExtractedThree(true);
      } else {
        // Selezione casuale per gli altri turni, escludendo i numeri speciali finché non è il loro turno
        const availableNumbers = [];
        for (let i = min; i <= max; i++) {
          if (!specialNumbers.includes(i) || 
              (i === 2 && extractionCount >= 2 && !hasExtractedTwo) ||
              (i === 3 && extractionCount >= 3 && !hasExtractedThree)) {
            availableNumbers.push(i);
          }
        }

        // Estrarre un numero casuale tra quelli disponibili
        if (availableNumbers.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableNumbers.length);
          randomNumber = availableNumbers[randomIndex];
        }
      }

      // Imposta il risultato e aggiorna il contatore delle estrazioni e il timestamp
      if (randomNumber !== null) {
        setResult(randomNumber);
        setExtractionCount(extractionCount + 1);
        const currentTimestamp = new Date().toISOString().replace('T', ' ').slice(0, -5) + ' UTC';
        setTimestamp(currentTimestamp);
      }

      setIsLoading(false); // Nasconde il loader dopo 500 ms
    }, 500);
  };

  return (
    <div className="generator-container">
      {!showNameGenerator ? (
        <div className="generator-box">
          <h3 className="generator-title">True Random Number Generator</h3>
          <div className="input-group">
            <div className="label-input-pair">
              <label>Min:</label>
              <input
                type="number"
                value={min}
                onChange={(e) => setMin(parseInt(e.target.value, 10))}
              />
            </div>
            <div className="label-input-pair">
              <label>Max:</label>
              <input
                type="number"
                value={max}
                onChange={(e) => setMax(parseInt(e.target.value, 10))}
              />
            </div>
          </div>
          <button className="generate-button" onClick={generateRandomNumber}>Generate</button>
          {isLoading ? (
            <div className="spinner"></div> // Mostra il loader
          ) : (
            <div className={`result-box ${result !== null ? 'filled' : 'empty'}`}>
              {result !== null ? (
                <>
                  <h2 className="result-number">{result}</h2>
                  <p>Min: {min}, Max: {max}</p>
                  <p>{timestamp}</p>
                </>
              ) : null}
            </div>
          )}
          <p className="powered-by">Powered by <a href="https://www.random.org">RANDOM.ORG</a></p>
        </div>
      ) : (
        <RandomNameGenerator />
      )}
      <p className="switch-generator">
        {showNameGenerator ? (
          <p onClick={() => setShowNameGenerator(false)}>Go back to the <span>random number generator</span></p>
        ) : (
          <p onClick={() => setShowNameGenerator(true)}>Try out our new <span>random name picker</span></p>
        )}
      </p>
    </div>
  );
};

export default RandomNumberGenerator;
