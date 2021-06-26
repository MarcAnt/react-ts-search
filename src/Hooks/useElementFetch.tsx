  
import {useEffect, useState} from 'react'
import { IElements } from '../Interfaces/SearchElement';
import useFetch from './useFetch';


type returnedTypes = {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    filterElement: () => string[] | undefined;
    filterAllInfoElement: (word: string) => string[][] | undefined;
}

const useElementFetch = ():returnedTypes => {

    const [state, setState] = useState<string>('')

    const {data} = useFetch<IElements>('https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON/?response_type=display');

    const filterElement = () => {

        const listElementsNames = data?.Table.Row.map(wordList => wordList.Cell[2]);

        const elements = listElementsNames?.filter((value) => {
            return value.toLocaleLowerCase().includes(state.toLocaleLowerCase())
        });
        return elements;
    }

    const filterAllInfoElement = (word: string) => {

        const listElements = data?.Table.Row.map(wordList => wordList.Cell)
        const elementsFilter = listElements?.filter(element => {
            if (element.join('').toLocaleLowerCase().includes(word.toLocaleLowerCase())) return element.join('')
        })       
        return elementsFilter;

    }

    
    useEffect(() => {
       filterElement();
    }, [state])

    return {state, setState, filterElement, filterAllInfoElement};
}

export default useElementFetch;
