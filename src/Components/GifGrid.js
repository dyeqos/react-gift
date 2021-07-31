import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGidItem } from './GifGidItem';

export const GifGrid = ({category}) => {

    const state = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {state.loading && <p>Cargando...</p>}

            <div className="card-grid">
                {
                    state.data.map( img => (
                        <GifGidItem
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
