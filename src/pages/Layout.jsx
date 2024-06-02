import React from 'react'
import { Nav } from './components/Nav'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import "./Layout.css";

export const Layout = () => {
    return (
        <div id="layout">
            <div id='header'>
                <Header />
            </div>
            <div className="main-content">
                <Nav />
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};