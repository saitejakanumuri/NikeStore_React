import './header.css'
const Header =()=>{
    return(
        <div className = "Navbar container">
            <nav>
                <img  src='images/brand_logo.png'/>
                <ul className="navigation_center">
                    <li href='#'>MENU</li>
                    <li href='#'>LOCATION</li>
                    <li href='#'>ABOUT</li>
                    <li href='#'>CONTACT</li>
                </ul>
                <button className="buttonq">Login</button>
            </nav>
        </div>
    )
}
export default Header;