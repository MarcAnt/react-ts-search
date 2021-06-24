import { createContext } from "react";


export interface ElementContextInterface {
    element: string;
    setCurrentElement: (currentEl: string) => void;
}

export const ElementValueContext: ElementContextInterface = {
    element: 'hola',
    setCurrentElement: () => {} 
};


export const ElementContext = createContext< ElementContextInterface>(ElementValueContext);

