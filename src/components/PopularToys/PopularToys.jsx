import React from 'react';
import './PopularToys.css';

const toys = [
  'Mini Train',
  'Mini Doll',
  'Giga Drone',
  'Turbo Rocket',
  'Turbo Chess',
  'Giga Chess',
  'North Pole Monopoly',
  'Giga Puzzle',
  'Turbo Doll',
  'Magic Car'
];

const PopularToys = () => {
  return (
    <div className="popular-toys-container">
      <div className="popular-toys-header">
        <h2>Top 10 Most Popular Toys</h2>
        <div className="header-decorations">
          <span className="decoration">🎄</span>
          <span className="decoration">🎁</span>
          <span className="decoration">🎄</span>
        </div>
      </div>
      <div className="toys-list">
        {toys.map((toy, index) => (
          <div 
            key={toy} 
            className="toy-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="toy-number">{index + 1}</div>
            <div className="toy-name">{toy}</div>
            <div className="toy-sparkle">✨</div>
          </div>
        ))}
      </div>
      <div className="list-decorations">
        <div className="decoration-item santa">🎅</div>
        <div className="decoration-item gift">🎁</div>
        <div className="decoration-item bell">🔔</div>
      </div>
    </div>
  );
};

export default PopularToys; 