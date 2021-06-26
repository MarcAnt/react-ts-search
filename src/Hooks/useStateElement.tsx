import { useCallback, useState } from "react";
import { ElementContextInterface } from "../Context/ElementContext";

//Usar solo para modificar el contexto
export const useStateElement = ():ElementContextInterface => {

    const [element, setElement] = useState<string>('');
   
    const setCurrentElement = useCallback((currentEl: string): void => {
        
        setElement(currentEl);
        
    }, [])

    
    return {element, setCurrentElement}

}
