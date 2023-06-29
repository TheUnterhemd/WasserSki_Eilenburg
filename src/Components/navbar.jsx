import React from 'react';
import { BrowserRouter, Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">WasserSki Eilenburg</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Wasserskianlage
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/Aufbau" className="dropdown-item">Aufbau</Link></li>
                  <li><Link to="/Anfahrt" className="dropdown-item">Anfahrt</Link></li>
                  <li><Link to="/Preise" className="dropdown-item">Preise</Link></li>
                </ul>
              </li>
              <li className="nav-item">
              <Link to="/Gastronomie" className="nav-link">Gastronomie</Link>
              </li>
              <li className="nav-item">
                <Link to="/Bootsverleih" className="nav-link">Bootsverleih</Link>
              </li>
              <li className="nav-item">
              <Link to="/Sauna" className="nav-link">Sauna</Link>
              </li>
              <li className="nav-item">
              <Link to="/Übernachtung" className="nav-link">Übernachtung</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </BrowserRouter>
    </div>
  );
};
