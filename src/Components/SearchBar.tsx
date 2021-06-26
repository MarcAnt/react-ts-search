import React, { useState, useEffect} from 'react';
import {BsSearch, BsX} from 'react-icons/bs'
import { motion } from "framer-motion";

type Props = {
    setState: React.Dispatch<React.SetStateAction<string>>,
    filterElement: () => string[] | undefined,
    setOpenInfo: React.Dispatch<React.SetStateAction<boolean>>, //open the info card
    setSelectedElement: React.Dispatch<React.SetStateAction<string>> //send to ElementCard the selected info
}

const SearchBar: React.FC<Props> = ({setState, filterElement, setOpenInfo, setSelectedElement}) => {

    const [word, setWord] = useState<string>('');

    useEffect(() => {
        setState(word)
        // setState(selectedElement)
    }, [word])
    
    
    const closeAndClean = () => {
        setWord('');
        setOpenInfo(false);
    }
    
    const openInfoCard = (element: string) => {
        setOpenInfo(true);
        setSelectedElement(element)
    }
    
    const elementsName = filterElement(); 

    return (

        <div className="searchBar">
            <div className="input-search">
                <input type="text" placeholder="Search element by name..." value={word} onChange={ (event) => setWord(event.target.value)} />
                { word ? <BsX style={{fontSize: '1.3rem'}} onClick={ () => closeAndClean()  }/> : <BsSearch style={{fontSize: '1.3rem'}} /> }

            </div>
            <motion.div
                className="searchResults"
                initial={{opacity: 0, y: 50}}
                animate={{
                    y: word ? 0 : 50,
                    opacity: 1
                }}
                transition={{
                    duration:.3
                }}
            >
                { word && elementsName?.map(element => <li key={element} onClick={() => openInfoCard(element) } >{element}</li>)}
            </motion.div>
        </div>
    )
}

export default SearchBar;
