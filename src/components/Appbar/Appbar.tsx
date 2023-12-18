import React from 'react';
import {NavLink} from 'react-router-dom';

const Appbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">TODO-APP</span>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/new-task" className="nav-link">New Task</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Appbar;