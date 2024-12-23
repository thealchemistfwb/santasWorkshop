import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './ProductionHours.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 20,
      right: 40,
      bottom: 20,
      left: 40
    }
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          family: 'Hammersmith One',
          size: 16
        },
        padding: 20,
        color: '#333'
      }
    },
    title: {
      display: true,
      text: 'Total Production Hours by Category',
      font: {
        family: 'Hammersmith One',
        size: 24
      },
      color: '#34C759', // Using green for this chart
      padding: 20
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      titleColor: '#333',
      titleFont: {
        family: 'Hammersmith One',
        size: 16
      },
      bodyColor: '#666',
      bodyFont: {
        family: 'Hammersmith One',
        size: 14
      },
      borderColor: '#ddd',
      borderWidth: 1,
      padding: 12,
      displayColors: false,
      callbacks: {
        label: function(context) {
          return `${context.parsed.y.toLocaleString()} Production Hours`;
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: 'Hammersmith One',
          size: 14
        },
        color: '#333',
        maxRotation: 45,
        minRotation: 45
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(52, 199, 89, 0.1)' // Light green grid lines
      },
      ticks: {
        font: {
          family: 'Hammersmith One',
          size: 14
        },
        color: '#333',
        padding: 10,
        callback: function(value) {
          return value.toLocaleString() + ' Hours';
        }
      }
    }
  }
};

const data = {
  labels: [
    'Plushies',
    'Wooden Toys',
    'Action Figures',
    'STEM Kits',
    'Board Games',
    'Dolls',
    'Vehicles',
    'Electronics',
    'Puzzles'
  ],
  datasets: [
    {
      label: 'Production Hours',
      data: [6508, 6314, 6026, 6020, 6008, 5073, 5020, 5006, 4763],
      backgroundColor: [
        '#34C759', // Christmas green
        '#FF3B30', // Christmas red
        '#34C759',
        '#FF3B30',
        '#34C759',
        '#FF3B30',
        '#34C759',
        '#FF3B30',
        '#34C759'
      ],
      borderColor: [
        '#2A9F47',
        '#CC2F26',
        '#2A9F47',
        '#CC2F26',
        '#2A9F47',
        '#CC2F26',
        '#2A9F47',
        '#CC2F26',
        '#2A9F47'
      ],
      borderWidth: 2,
      borderRadius: 8,
      hoverBackgroundColor: '#FFD700', // Gold color on hover
      barThickness: 40,
    }
  ]
};

const ProductionHours = () => {
  return (
    <div className="production-hours-container">
      <div className="chart-container">
        <div className="candy-canes" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="candy-cane">🍬</div>
          ))}
        </div>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default ProductionHours; 