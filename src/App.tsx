import React, {useState} from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import ElementCard from './Components/ElementCard'

import useElementFetch from './Hooks/useElementFetch'


const App: React.FC = () => {

  const {state, setState, filterElement, filterAllInfoElement} = useElementFetch();
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const [selectedElement, setSelectedElement] = useState<string>('');

  return (
    <div className="App">

        <ElementCard state={selectedElement}  filterAllInfoElement={filterAllInfoElement} openInfo={openInfo} />
        <SearchBar setState={setState} filterElement={filterElement} setSelectedElement={setSelectedElement} setOpenInfo={setOpenInfo}/>

    </div>
  )
}

export default App
