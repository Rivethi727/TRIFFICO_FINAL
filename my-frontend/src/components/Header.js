import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";



const Header = () =>{
  const [user, setUser] = useState(null);
    const email = localStorage.getItem("email");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
              if (email != null) {
                const response = await fetch(`http://localhost:4700/api/v1/${email}`);
                const data = await response.json();
                if (data != null) {
                    setUser(data);
                } else {
                    console.log("User not found");
                }
              }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [email]);
    
  const handleLogout = () => {
		localStorage.removeItem("token");
    localStorage.removeItem("email");
		window.location.reload();
	};
    const userToken = localStorage.getItem("token");
 return(
  <>
   <header className="header" data-header>
    <div className="container">

      <a href="http://localhost:3000/">
        <h1 className="logo">TRIFFICO</h1>
      </a>

      <button className="nav-toggle-btn" data-nav-toggle-btn aria-label="Toggle Menu">
        <ion-icon name="menu-outline" className="open"></ion-icon>
        <ion-icon name="close-outline" className="close"></ion-icon>
      </button>

      <nav className="navbar">

        <ul className="navbar-list">

          <li>
            <a href="#" className="navbar-link">Home</a>
          </li>

          <li>
            <a href="#" className="navbar-link">About Us</a>
          </li>

          <li>
            <a href="#" className="navbar-link">Tours</a>
          </li>

          <li>
            <a href="#" className="navbar-link">Destinations</a>
          </li>

          <li>
            <a href="#" className="navbar-link">Blog</a>
          </li>

          <li>
            <a href="#" className="navbar-link">Contact Us</a>
          </li>

        </ul>

        {userToken ? (
        <a href="/login" className="btn btn-warning" 
        onClick={handleLogout} style={{
        '--bs-btn-padding-y': '.85rem',
        '--bs-btn-padding-x': '.85rem',
       '--bs-btn-font-size': '1.5rem',
        }}>Logout</a>
        ) : (
        <a href="/login" className="btn btn-success" 
        style={{
       '--bs-btn-padding-y': '.85rem',
       '--bs-btn-padding-x': '.85rem',
       '--bs-btn-font-size': '1.5rem',
        }}>Login</a> 
        )}

      {user && user.isAdmin === "true" && (
      <a href="/admin" className="btn btn-success ms-3" style={{
      '--bs-btn-padding-y': '.85rem',
      '--bs-btn-padding-x': '.85rem',
      '--bs-btn-font-size': '1.5rem',
      }} >Admin</a>
      )}
      </nav>
    </div>
   </header>
  </>
 )
}




export default Header;