import React from 'react';
import './ExpensiveToys.css';

const expensiveCategories = [
  { category: 'Electronics', price: 56.84 },
  { category: 'Wood Toys', price: 54.95 },
  { category: 'Vehicles', price: 54.62 },
  { category: 'Board Games', price: 53.91 },
  { category: 'Puzzles', price: 53.54 },
  { category: 'Plushies', price: 52.93 },
  { category: 'Action Figures', price: 52.86 },
  { category: 'Dolls', price: 52.02 },
  { category: 'STEM Kits', price: 51.00 }
];

const ExpensiveToys = () => {
  return (
    <div className="expensive-toys-container">
      <div className="expensive-toys-header">
        <h2>Most Expensive Toy Categories</h2>
        <div className="header-decorations">
          <span className="decoration">⭐</span>
          <span className="decoration">💰</span>
          <span className="decoration">⭐</span>
        </div>
      </div>
      <div className="categories-list">
        {expensiveCategories.map((item, index) => (
          <div 
            key={item.category} 
            className="category-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="category-number">{index + 1}</div>
            <div className="category-name">{item.category}</div>
            <div className="category-price">${item.price.toFixed(2)}</div>
            <div className="category-sparkle">💎</div>
          </div>
        ))}
      </div>
      <div className="list-decorations">
        <div className="decoration-item star">⭐</div>
        <div className="decoration-item coins">🪙</div>
        <div className="decoration-item gift">🎁</div>
      </div>
    </div>
  );
};

export default ExpensiveToys; 