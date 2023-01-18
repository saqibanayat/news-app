import React from 'react'
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <div className='navi' >
        <ul>
          <li><a href="default.asp"> <strong>Home</strong></a></li>
          <li><a href="news.asp"><strong>News</strong></a></li>
          <li><a href="contact.asp"><strong>Contact</strong></a></li>
          <li><a href="about.asp"><strong>About</strong></a></li>
        </ul>
        <div className="search">
          <input type="text" name="search" id="search" placeholder="seach a news" />
        </div>
        <div className=" dropdown">
          <button className='Btn-2'>Catagory
            <i className="arrow down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/science">Science</Link>
            <Link to="/sports">Sports</Link>
            <Link to="/technology">Tech</Link>
          </div>
        </div>

      </div>
    </>

  )
}


export default Navbar


