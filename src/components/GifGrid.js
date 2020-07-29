import React from 'react';
import GifGridItem from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs'

const  GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs(category);

    return(
        <>
        <h3>{category}</h3>
        { loading && <p>Cargando...</p> }
        <div className="card-grid animate__animated animate__fadeIn animate__delay-1s">
            {
                images.map( img => {
                    return <GifGridItem  
                        key={img.id}
                        {...img}
                    />
                })
            }
        </div>
        </>
    )

}

export default GifGrid;


