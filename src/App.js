// src/App.js
import React from 'react';
import Header from './components/Header';
import AdvisoryBanner from './components/AdvisoryBanner';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AdvisoryBanner />
      <RandomNumberGenerator />
      <ContentSection title="What's this fuss about true randomness?">
        <p>Perhaps you have wondered how predictable machines like computers can generate randomness...</p>
      </ContentSection>
      <Footer />
    </div>
  );
}

export default App;
