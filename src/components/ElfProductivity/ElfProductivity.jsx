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
import './ElfProductivity.css';

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
      text: 'Number of Elves Required by Toy Category',
      font: {
        family: 'Hammersmith One',
        size: 24
      },
      color: '#FF3B30',
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
          return `${context.parsed.y} Elves Required`;
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
        color: 'rgba(255, 59, 48, 0.1)'
      },
      ticks: {
        font: {
          family: 'Hammersmith One',
          size: 14
        },
        color: '#333',
        padding: 10,
        callback: function(value) {
          return value + ' Elves';
        }
      }
    }
  }
};

const data = {
  labels: [
    'Wooden Toys',
    'Plushies',
    'Action Figures',
    'Board Games',
    'Vehicles',
    'Puzzles',
    'STEM Kits',
    'Dolls',
    'Electronics'
  ],
  datasets: [
    {
      label: 'Number of Elves',
      data: [1011, 967, 881, 879, 870, 849, 831, 827, 798],
      backgroundColor: [
        '#FF3B30', // Christmas red
        '#34C759', // Christmas green
        '#FF3B30',
        '#34C759',
        '#FF3B30',
        '#34C759',
        '#FF3B30',
        '#34C759',
        '#FF3B30'
      ],
      borderColor: [
        '#CC2F26',
        '#2A9F47',
        '#CC2F26',
        '#2A9F47',
        '#CC2F26',
        '#2A9F47',
        '#CC2F26',
        '#2A9F47',
        '#CC2F26'
      ],
      borderWidth: 2,
      borderRadius: 8,
      hoverBackgroundColor: '#FFD700', // Gold color on hover
      barThickness: 40, // Make bars thicker
    }
  ]
};

const ElfProductivity = () => {
  return (
    <div className="elf-productivity-container">
      <div className="chart-container">
        <div className="snowflakes" aria-hidden="true">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="snowflake">❅</div>
          ))}
        </div>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default ElfProductivity; 