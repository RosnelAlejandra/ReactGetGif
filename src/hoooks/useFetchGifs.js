import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/GetGif';

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState(
       {data:[],
        loading: true} 
    );

 //Se ejecuta al cambiar categoria   
 useEffect( () => {

    getGifs( category )
        .then( imgs => {
            
            setState({
                data: imgs,
                loading: false
            });
        })

}, [category])

    return state; //data inicial
    
}
