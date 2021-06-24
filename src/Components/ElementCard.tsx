
import React , { useContext } from 'react';
import { ElementContext } from '../Context/ElementContext';
import { IElements } from '../Interfaces/SearchElement';

import { motion } from "framer-motion";

const ElementCard = ({data}: {data: IElements | undefined}): JSX.Element => {
    
    const elementContext = useContext(ElementContext);   
    
    const filterElement = (word: string) => {

        const listElements = data?.Table.Row.map(wordList => wordList.Cell)

        
        const elementsFilter = listElements?.filter(element => {
            if (element.join('').toLocaleLowerCase().includes(word.toLocaleLowerCase())) return element.join('')
        })        
        return elementsFilter;
    }

    const elementInfo = filterElement(elementContext.element);
   
    return (
        
        <div className="card-wrapper">
                <motion.div 
                    initial={{opacity: 0, y: -1000}}  
                    animate={{
                        y: (elementContext.element !== '' ) ? 0 : -1000,
                        opacity: 1
                    }} 
                    transition={{
                        duration:.5
                    }}
                    className="card-content">
                        <div className="element" style={{ backgroundColor: `#${ (elementContext.element !== '') ? elementInfo?.map(e => e[4]) : 'f5f5f5' }` }}>
                            <h6>{ (elementContext.element !== '') ? elementInfo?.map(e => e[0]) : ''}</h6>
                            <h1>{ (elementContext.element !== '') ? elementInfo?.map(e => e[1]) : ''}</h1>
                            <h4>{ (elementContext.element !== '') ? elementInfo?.map(e => e[2]) : ''}</h4>
                            <h5>{ (elementContext.element !== '') ? elementInfo?.map(e => e[15]) : '' }</h5>
                        </div>
                        <div className="description">
                            <small>Atomic Number: <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[0]) : ''}</strong></span></small>   
                            <small>Symbol: <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[1]) : ''}</strong></span></small>   
                            <small>Name: <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[2]) : ''}</strong></span> </small>
                            <small>Atomic Mass: <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[3]) : ''}</strong></span></small>
                            <small>Electron Configuration:  <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[5]) : ''}</strong></span> </small>
                            <small>Electronegativity:  <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[6]) : ''}</strong></span> </small>
                            <small>Atomic Radius:  <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[7]) : ''}</strong></span></small>
                            <small>Ionization Energy:  <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[8]) : ''}</strong></span> </small>
                            <small>Electron Affinity:  <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[9]) : ''}</strong></span> </small>
                            <small>Oxidation States:  <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[10]) : '' }</strong></span> </small>
                            <small>Standard State:  <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[11]) : '' }</strong></span> </small>
                            <small>Melting Point:  <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[12]) : '' }</strong></span> </small>
                            <small>Boiling Point:  <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[13]) : '' }</strong></span> </small>
                            <small>Density: <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[14]) : '' }</strong></span></small>
                            <small>Group Block:  <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[15]) : '' }</strong></span> </small>
                            <small>Year Discovered:  <span><strong>{ (elementContext.element !== '') ? elementInfo?.map(e => e[16]) : '' }</strong></span> </small>
                        </div>
                </motion.div>
        </div>
    )
}

export default ElementCard;
