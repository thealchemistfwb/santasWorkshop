import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import ElfProductivity from './components/ElfProductivity/ElfProductivity'
import ProductionHours from './components/ProductionHours/ProductionHours'
import PopularToys from './components/PopularToys/PopularToys'
import ExpensiveToys from './components/ExpensiveToys/ExpensiveToys'
import FactCarousel from './components/FactCarousel/FactCarousel'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <FactCarousel />
        <div className="charts-container">
          <ElfProductivity />
          <ProductionHours />
        </div>
        <div className="lists-container">
          <PopularToys />
          <ExpensiveToys />
        </div>
      </main>
    </div>
  )
}

export default App
