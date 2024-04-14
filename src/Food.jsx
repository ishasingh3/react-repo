
function Food(){

    const food1 = "Apple";
    const food2 = "Strawberry";

    return(
        <ul>
            <li>Orange</li>
            {/* as food 1 is a js variable we will have to use {} to use it */}
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food