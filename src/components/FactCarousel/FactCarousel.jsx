import { useState, useEffect } from 'react';
import './FactCarousel.css';

const facts = [
  {
    id: 1,
    text: "Electronics are the most expensive toys to produce, averaging the highest cost per item at $56.84. While popular, their high price may affect overall profitability"
  },
  {
    id: 2,
    text: "Wooden Toys require the most elves, totaling 1,011 across all projects. Consider balancing resources to meet demand without overburdening this category."
  },
  {
    id: 3,
    text: "Plushies take the most production time, with 6,508 total hours, significantly outpacing other categories. Streamlining production could help increase efficiency."
  }
];

const FactCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % facts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fact-carousel">
      <div className="present"></div>
      <div className="present"></div>
      <div className="present"></div>
      <div className="present"></div>
      <div className="present"></div>
      <div className="present"></div>
      <div className="present"></div>
      <div className="present"></div>
      <div className="present"></div>
      
      <div className="carousel-content">
        <div className="reindeer-container">
          <div className="reindeer-background"></div>
          <img src="/images/reindeer.png" alt="Holiday Reindeer" className="reindeer-image" />
        </div>
        <div className="fact-container">
          <h2>🔔 DID YOU KNOW?</h2>
          <p className="fact-text">{facts[currentSlide].text}</p>
        </div>
      </div>
      <div className="carousel-indicators">
        {facts.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FactCarousel; 