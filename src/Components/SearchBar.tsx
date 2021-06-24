import React, { useState, useContext } from 'react';
import {BsSearch, BsX} from 'react-icons/bs'
import { ElementContext } from '../Context/ElementContext';
import { IElements } from '../Interfaces/SearchElement';

import { motion } from "framer-motion";

const SearchBar = ({data}:{data: IElements | undefined}): JSX.Element => {

    const [word, setWord] = useState<string>('')
    const {setCurrentElement} = useContext(ElementContext);

    const handleChangeWord:  React.ChangeEventHandler<HTMLInputElement> = (event):void => {
        setWord(event.target.value)
    }

     //open element and create the value fo the context
    const openElement = (element: string) => {
        setCurrentElement(element)
        setWord('');
    }


    // JSX.Element[] | undefined
    const filterElement = (word: string):JSX.Element[] | undefined => {

        const listElementsNames = data?.Table.Row.map(wordList => wordList.Cell[2]);

        const elements = listElementsNames?.filter((value) => {
            return value.toLocaleLowerCase().includes(word.toLocaleLowerCase())
        });
        
        return elements?.map(element => <li key={element} onClick={() => openElement(element)}>{element}</li> ) ;
        // const listElements = data?.Table.Row.map(wordList => wordList.Cell)

        // const elementsFilter = listElements?.filter(element => {
        //     if (element.join('').toLocaleLowerCase().includes(word.toLocaleLowerCase())) return element.join('')
        // })       

        // //only return the name
        // return elementsFilter?.map(el => <li onClick={ () => openElement() } key={el[2]} >{el[2]}</li> )


    }


    const clearInput: React.MouseEventHandler<SVGElement> = (event):void => {
        setWord('');
        setCurrentElement('');
    }


    return (
     
        <div className="searchBar">
            <div className="input-search">
                <input type="text" placeholder="Search element by name..." value={word} onChange={ (event) => handleChangeWord(event)} />
                { word ? <BsX style={{fontSize: '1.3rem'}} onClick={ (event) => clearInput(event)  }/> : <BsSearch style={{fontSize: '1.3rem'}} /> }
                
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
                { word && filterElement(word)}
            </motion.div>
        </div>
    )
}

export default SearchBar;
