import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav class="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/user">User</NavLink>
            <NavLink to="/admin">Admin</NavLink>
        </nav>
    );
}

