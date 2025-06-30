import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-black text-white p-4 shadow">
      <nav className="max-w-6xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold">XOP-25</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/engine">Engine</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}