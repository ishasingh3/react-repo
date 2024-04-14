
function Footer(){

    return(
        // to insert javascript in the return statement use curly braces
        <footer>
            <hr></hr>
            {/* $copy is a copyright symbol */}
            <p>&copy; {new Date().getFullYear()} My Website Name</p>
        </footer>
    );
}

export default Footer