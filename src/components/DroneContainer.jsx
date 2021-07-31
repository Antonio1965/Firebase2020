import React, { useState } from "react";
import Drone from './Drone'

import { database } from './firebase/firebase1';

export const DroneContainer = () => {
    const [droneMostrado, setDroneMostrado] = useState();

    const getdrone = () =>{
        const drone = database.collection('productos')

        
    }

    return (
        <>
        {droneMostrado?(
            <Drone drone={droneMostrado}/>
        ):(
            <h2>Cargando...</h2>
        )}
        </>
    );
}