import React, { useEffect, useState } from 'react'
import './App.scss';

// Required import for react-bootstrap functionality
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import { DataTable, Header, ToggleButton } from './components'
import Button from 'react-bootstrap/Button'

function App() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [selections, setSelections] = useState({ 
    'character': true,
    'location': true,
    'quote': true
  })

  // API call requests data after components are rendered
  useEffect(() => {
    let tempArray = []
    // Proxy server is necessary to get past endpoint CORS
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://sbt-tech-exercise-content.s3-us-west-1.amazonaws.com/content.json'
    fetch(proxyurl + url)
      .then(res => res.json())
      // Copies response data objects to new objects with correct keys, in case of faulty key names
      .then(resData => resData.content.forEach(item => {
        let tempObj = {}
        tempObj.tag = Object.values(item)[0]
        tempObj.content = Object.values(item)[1]
        tempArray.push(tempObj)
      }))
    setData(tempArray)
    tempArray.length = 0
  }, [])

  // performs filtering action on the full data array, returns subarray of any combination of characters/quotes/location
  const filterData = (fullArray, selectionsArray) => {
    const filterKeys = Object.keys(selectionsArray).filter(key => selectionsArray[key] === true)
    const filteredArray = fullArray.filter(item => {
      return filterKeys.includes(item.tag) ? item : null
    })
    setFilteredData(filteredArray)
  }

  // sets the state of the filter selections
  const handleChange = tag => {
    switch (tag) {
      case 'character':
        setSelections(selections => ({ ...selections, 'character': !selections.character }))
        break
      case 'location':
        setSelections(selections => ({ ...selections, 'location': !selections.location }))
        break
      case 'quote':
        setSelections(selections => ({ ...selections, 'quote': !selections.quote }))
        break
      default:
        return null
    }
  }

  return (
    <div className="App">
      <Header />
      <div className='buttonDiv'>
        <div className='submitDiv'>
          <Button variant='primary' onClick={() => filterData(data, selections)}>Get Data!</Button>
        </div>
        <div className='toggleDiv'>
          <h4>Filter Buttons</h4>
          <span>
            <ToggleButton name={'Characters'} selected={selections.character} handleChange={() => handleChange('character')} />
            <ToggleButton name={'Locations'} selected={selections.location} handleChange={() => handleChange('location')} />
            <ToggleButton name={'Quote'} selected={selections.quote} handleChange={() => handleChange('quote')} />
          </span>
        </div>
      </div>
      <DataTable 
        data={filteredData}
      />
    </div>
  )
}

export default App;
