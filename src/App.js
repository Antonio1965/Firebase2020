import { useState  } from 'react';
import './App.css';
import { Drone } from './components/Drone';
import { database } from './components/firebase/firebase1';



export function App() {

  const [droneMostrar, setDroneMostrar] = useState([]);

  const obtenerDrone = () => {
    const drone = database.collection('productos');
    drone.get().then ((query) => {
      setDroneMostrar(query.docs.map(doc => {
        return {...doc.data(), id : doc.id}
      
      }))
    })
  }
  

  return (
    <div className="App">
     <h1>Firebase-Bases-Datos</h1>
     <button onClick={obtenerDrone}>LLAMAR A FIREBASE</button>
     {droneMostrar.length ? ( 
     droneMostrar.map ((drone) => <Drone drone={drone} key={drone.id}/>)
     ):(
       <h3>Cargando...</h3>
     )}
    </div>
  );
}



