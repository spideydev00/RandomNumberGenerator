// src/components/RandomNameGenerator.js
import React, { useState } from 'react';
import './RandomNameGenerator.css';

const RandomNameGenerator = () => {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);
  const [selectedName, setSelectedName] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Track extraction count and flags for special names
  const [extractionCount, setExtractionCount] = useState(0);
  const [hasExtractedBucci, setHasExtractedBucci] = useState(false);
  const [hasExtractedAlex, setHasExtractedAlex] = useState(false);

  // Define special names (in lowercase for case-insensitive comparison)
  const specialNames = ["alex", "bucci"];

  const addName = () => {
    if (name.trim() !== '') {
      setNameList([...nameList, name.trim()]);
      setName('');
    }
  };

  const pickRandomName = () => {
    if (nameList.length === 0) return;

    let pickedName = null;

    // Convert all names to lowercase for case-insensitive comparison
    const nameListLower = nameList.map((n) => n.toLowerCase());

    setIsLoading(true);
    setTimeout(() => {
      // Extract "Bucci" at the 4th turn and "Alex" at the 5th turn
      if (extractionCount === 2 && !hasExtractedBucci && nameListLower.includes("bucci")) {
        pickedName = nameList.find((n) => n.toLowerCase() === "bucci"); // Pick the original "Bucci" entry
        setHasExtractedBucci(true);
      } else if (extractionCount === 3 && !hasExtractedAlex && nameListLower.includes("alex")) {
        pickedName = nameList.find((n) => n.toLowerCase() === "alex"); // Pick the original "Alex" entry
        setHasExtractedAlex(true);
      } else {
        // Filter out "Bucci" and "Alex" if their respective turns haven't been reached
        const availableNames = nameList.filter(
          (n) =>
            (!specialNames.includes(n.toLowerCase()) || 
             (n.toLowerCase() === "bucci" && hasExtractedBucci === false && extractionCount >= 3) ||
             (n.toLowerCase() === "alex" && hasExtractedAlex === false && extractionCount >= 4))
        );

        // If there are names to choose from, pick one randomly
        if (availableNames.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableNames.length);
          pickedName = availableNames[randomIndex];
        }
      }

      if (pickedName) {
        setSelectedName(pickedName);
        setExtractionCount(extractionCount + 1);

        // Update timestamp each time a name is picked
        const currentTimestamp = new Date().toISOString().replace('T', ' ').slice(0, -5) + ' UTC';
        setTimestamp(currentTimestamp);
      }

      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="generator-box">
      <h3 className="generator-title">True Random Name Picker</h3>
      <div className="name-input-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
        />
        <button className="add-button" onClick={addName}>Add Name</button>
      </div>
      <button className="generate-button" onClick={pickRandomName}>Pick Random Name</button>
      {isLoading ? (
        <div className="spinner"></div>
      ) : selectedName && (
        <div className="result-box filled">
          <h2 className="result-name">{selectedName}</h2>
          <p>{timestamp}</p> 
        </div>
      )}
      <div className="name-list">
        {nameList.map((name, index) => (
          <p key={index} className="name-item">{name}</p>
        ))}
      </div>
    </div>
  );
};

export default RandomNameGenerator;