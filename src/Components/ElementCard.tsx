import React from 'react';
import { motion } from "framer-motion";

type Props = {
    state: string;
    openInfo: boolean;
    filterAllInfoElement: (word: string) => string[][] | undefined;
}

const ElementCard: React.FC<Props> = ({state, filterAllInfoElement, openInfo})  => {
    
    const elementInfo = filterAllInfoElement(state);
 
    return (
        
        <div className="card-wrapper">
                <motion.div 
                    initial={{opacity: 0, y: -1000}}  
                    animate={{
                        y: (openInfo ) ? 0 : -1000,
                        opacity: 1
                    }} 
                    transition={{
                        duration:.5
                    }}
                    className="card-content">
                        <div className="element" style={{ backgroundColor: `#${ openInfo ? elementInfo?.map(e => e[4]) :'f5f5f5'}` }}>
                            <h6>{ (state !== '') ? elementInfo?.map(e => e[0]) : ''}</h6>
                            <h1>{ (state !== '') ? elementInfo?.map(e => e[1]) : ''}</h1>
                            <h4>{ (state !== '') ? elementInfo?.map(e => e[2]) : ''}</h4>
                            <h5>{ (state !== '') ? elementInfo?.map(e => e[15]) : '' }</h5>
                        </div>
                        <div className="description">
                            <small>Atomic Number: <span><strong>{ (state !== '') ? elementInfo?.map(e => e[0]) : ''}</strong></span></small>   
                            <small>Symbol: <span><strong>{ (state !== '') ? elementInfo?.map(e => e[1]) : ''}</strong></span></small>   
                            <small>Name: <span><strong>{ (state !== '') ? elementInfo?.map(e => e[2]) : ''}</strong></span> </small>
                            <small>Atomic Mass: <span><strong>{ (state !== '') ? elementInfo?.map(e => e[3]) : ''}</strong></span></small>
                            <small>Electron Configuration:  <span><strong>{ (state !== '') ? elementInfo?.map(e => e[5]) : ''}</strong></span> </small>
                            <small>Electronegativity:  <span><strong>{ (state !== '') ? elementInfo?.map(e => e[6]) : ''}</strong></span> </small>
                            <small>Atomic Radius:  <span><strong>{ (state !== '') ? elementInfo?.map(e => e[7]) : ''}</strong></span></small>
                            <small>Ionization Energy:  <span><strong>{ (state !== '') ? elementInfo?.map(e => e[8]) : ''}</strong></span> </small>
                            <small>Electron Affinity:  <span><strong>{ (state !== '') ? elementInfo?.map(e => e[9]) : ''}</strong></span> </small>
                            <small>Oxidation States:  <span><strong>{ (state !== '') ? elementInfo?.map(e => e[10]) : '' }</strong></span> </small>
                            <small>Standard State:  <span><strong>{ (state !== '') ? elementInfo?.map(e => e[11]) : '' }</strong></span> </small>
                            <small>Melting Point:  <span><strong>{ (state !== '') ? elementInfo?.map(e => e[12]) : '' }</strong></span> </small>
                            <small>Boiling Point:  <span><strong>{ (state !== '') ? elementInfo?.map(e => e[13]) : '' }</strong></span> </small>
                            <small>Density: <span><strong>{ (state !== '') ? elementInfo?.map(e => e[14]) : '' }</strong></span></small>
                            <small>Group Block:  <span><strong>{ (state !== '') ? elementInfo?.map(e => e[15]) : '' }</strong></span> </small>
                            <small>Year Discovered:  <span><strong>{ (state !== '') ? elementInfo?.map(e => e[16]) : '' }</strong></span> </small>
                        </div>
                </motion.div>
        </div>
    )
}

export default ElementCard;
