"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar">
      <h2>ChemTech</h2>

      <div className={`nav-links ${menu ? "active" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="menu-btn" onClick={() => setMenu(!menu)}>
        ☰
      </div>
    </div>
  );
}