import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="profile-section">
        <img 
          src="/images/santa-profile.png" 
          alt="Profile" 
          className="profile-image"
        />
        <div className="profile-info">
          <span className="welcome-text">welcome back</span>
          <h2 className="profile-name">MR. CLAUS</h2>
        </div>
      </div>

      <div className="menu-items">
        <div className="menu-item active">
          <span>Dashboard</span>
        </div>
        <div className="menu-item">
          <span>Utilization</span>
        </div>
        <div className="menu-item">
          <span>Engagement</span>
        </div>
        <div className="menu-item">
          <span>Success Rates</span>
        </div>
        <div className="menu-item">
          <span>Settings</span>
        </div>
      </div>

      <div className="company-logo">
      <img 
          src="/images/logo.png" 
          alt="The Company" 
          className="logo"
        />
      </div>

      <button 
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? '→' : '←'}
      </button>
    </div>
  );
};

export default Sidebar; 