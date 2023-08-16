import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <section className="app-header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
        <NavLink to="/statistics">Stats</NavLink>
      </nav>
    </section>
  )
}
