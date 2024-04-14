
function Header() {
    // we write our html code in the return statement
    return(
        <header>
            <h1>My React Website</h1>
            {/* links can be contained using nav */}
            <nav>  
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header