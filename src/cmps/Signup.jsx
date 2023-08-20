import React from 'react'
import { useState } from 'react'

export function Signup({ onSignup }) {
  const [cred, setCred] = useState({
    email: '',
    password: '',
    phone: '',
    name: '',
  })

  function handleChange({ target }) {
    const field = target.name
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value || ''
        break
      case 'checkbox':
        value = target.checked
      default:
        break
    }
    setCred((prevCred) => ({
      ...prevCred,
      [field]: value,
    }))
  }

  return (
    <form className="user-auth" onSubmit={(ev) => onSignup(ev, cred)}>
      <h1>Signup</h1>

      <span className="input-label">Email</span>
      <input
        onChange={handleChange}
        value={cred.email}
        type="text"
        name="email"
        placeholder="Email"
      />

      <span className="input-label">Name</span>
      <input
        onChange={handleChange}
        value={cred.name}
        type="text"
        name="name"
        placeholder="Full name"
      />

      <span className="input-label">Phone</span>
      <input
        onChange={handleChange}
        value={cred.phone}
        type="text"
        name="phone"
        placeholder="Phone"
      />

      <span className="input-label">Password</span>
      <input
        onChange={handleChange}
        value={cred.password}
        type="password"
        name="password"
        placeholder="Password"
      />

      <button className="auth-btn">Continue</button>
    </form>
  )
}
