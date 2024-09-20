import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span className="icon">
              <CodeIcon />
            </span>
            <span><h3>YUMMEAL BAZAR RPL 1</h3></span>
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
            </li>
            <div class="container">
              <h3>DON'T YOU WANT TO ORDER?</h3>
              <form>

    <div className="bawah">
    <label for="password"></label>
    <input type="password" id="password" name="password" placeholder="Password" required>
    <label for="ulangi_password"></label>
    <input type="password" id="ulangi_password" name="ulangi_password" placeholder="Ulangi Password" required>
    </div>
    
    <div class="checkbox">
      <input type="checkbox" id="syarat" name="syarat" required>
      <label for="syarat">Saya setuju dengan Syarat dan Ketentuan.</label>
    </div>

    <button type="submit">Daftar</button>
    <hr>
    <button class="login-google" type="button">Login Menggunakan Google</button>
  </form>
  <div class="footer">
    Temukan kesalahan atau bug? Laporkan di sini.
  </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
