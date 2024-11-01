// src/components/ContentSection.js
import React from 'react';
import './ContentSection.css';

const ContentSection = () => (
  <section className="content-section">
    <h2 className="fuss-title">
      What&apos;s this fuss about <em>true</em> randomness?
    </h2>
    <p className="content-paragraph">
      Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are <em>pseudo-random</em>, which means they are generated in a predictable fashion using a mathematical formula. This is fine for many purposes, but it may not be random in the way you expect if you're used to dice rolls and lottery drawings.
    </p>
    <p className="content-paragraph">
      RANDOM.ORG offers <em>true</em> random numbers to anyone on the Internet. The randomness comes from atmospheric noise, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs. People use RANDOM.ORG for holding drawings, lotteries and sweepstakes, to drive online games, for scientific applications and for art and music. The service has existed since 1998 and was built by <a href="https://www.random.org/mads">Dr Mads Haahr</a> of the <a href="http://www.scss.tcd.ie/">School of Computer Science and Statistics</a> at <a href="http://www.tcd.ie/">Trinity College, Dublin</a> in Ireland. Today, RANDOM.ORG is operated by <a href="https://www.random.org/company">Randomness and Integrity Services Ltd</a>.
    </p>
  </section>
);

export default ContentSection;
