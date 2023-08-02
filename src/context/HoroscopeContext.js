import { createContext , useState} from 'react';
import horoscopesObj from '../data/horoscopes'

export const HoroScopeProvider=(props) => {
    const [currentSign, setCurrentSign] = useState("Leo")
    const sign = horoscopesObj[currentSign]; 
    return (
        <HoroscopeContext.Provider value= {{sign,setCurrentSign}}>
            {props.children}
        </HoroscopeContext.Provider>
    )
}

export const HoroscopeContext = createContext();