import {useEffect, useState} from 'react'

type ReturnType<T> = {
    data?: T,
    done?: boolean
}

const useFetch = <T,>(url: string):ReturnType<T> => {

    const [data, setData] = useState()
    const [done, setDone] = useState(false)

    useEffect(() => {
        fetch(url)
        .then( res => res.json())
        .then( res => {
            setData(res)
            setDone(true)
        })
    }, [url])
    
    return {data, done}

}

export default useFetch;
