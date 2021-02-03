import React from 'react'
//import { getGifs } from '../helpers/GetGif';
//import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

   // const [images, setImages] = useState([]);
    
 //   useEffect( () => {
        //evita que se ejecute en cada evento
   //     getGifs(category).then(img => setImages(img))
    //},[category]) 

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            <div className="card-grid">
                
                {/** images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    )) */
                   
                }

            </div>
        </>
    )
}



