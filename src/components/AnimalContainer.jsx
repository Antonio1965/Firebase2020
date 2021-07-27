import React, { useState } from "react";
import Animal from './Animal';

import { database } from './firebase/firebase';

export const AnimalContainer = () => {
    const [animalMostrado, setAnimalMostrado] = useState();

    const getAnimales = () =>{
        const animales = database.collection('animales')

        
    }

    return (
        <>
        {animalMostrado?(
            <Animal animal={animalMostrado}/>
        ):(
            <h2>Cargando...</h2>
        )}
        </>
    );
}