
function Card(){

    return(
        // in jsx class is a reserved keyword hence we will use className
        <div className="card">
            <img className="card-image" src="https://i.pinimg.com/736x/5d/6d/23/5d6d23fd7adb44baba20a60c252da339.jpg" alt="Pikachu"></img>
            {/* <img className="card-image" src="https://via.placeholder.com/150" alt="Pikachu"></img> */}
            <h2 className="card-title">Isha Singh</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
    );

}

export default Card