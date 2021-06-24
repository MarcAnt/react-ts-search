import React from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import ElementCard from './Components/ElementCard'
import { IElements } from './Interfaces/SearchElement';

import useFetch from './Hooks/useFetch'
import {useStateElement} from './Hooks/useStateElement'

import { ElementContext } from './Context/ElementContext';


function App() {

  const {data} = useFetch<IElements | undefined>('https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON/?response_type=display');
  const element = useStateElement();

  return (
    <div className="App">

      <ElementContext.Provider value={element}>

        <ElementCard data={data} />
        <SearchBar data={data} />

      </ElementContext.Provider>
    </div>
  )
}

export default App
