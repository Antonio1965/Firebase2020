import './CSS/Drone.css';


export const Drone = ({drone}) => {

    return <article >
        <img  className= 'img' src={drone.image} alt={drone.name}/>
        <p>{drone.proctType}(ID: {drone.id})</p>
        <i>Rating : {drone.rating}</i>
        <i>Precio : {drone.price}</i>
        <i>En stock : {drone.stock}</i>
    </article>
}