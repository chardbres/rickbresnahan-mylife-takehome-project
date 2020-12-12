import React, { useState, setState } from 'react'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import { DataTable, Header } from './components'

function App() {
  const [data, setData] = useState(null)
  const [filteredData, setFilteredData] = useState(data)

  return (
    <div className="App">
      <Header />
      <DataTable />
    </div>
  );
}

export default App;
