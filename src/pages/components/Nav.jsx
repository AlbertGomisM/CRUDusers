import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <i className="fas fa-user"></i>
                    <Link to="/">Usuarios</Link>
                </li>
            </ul>
        </nav>
    )
}
