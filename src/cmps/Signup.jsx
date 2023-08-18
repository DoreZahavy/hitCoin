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
    <form onSubmit={() => onSignup(cred)}>
      <h1>Signup</h1>
      <div class="input-container">
        <span class="input-label">Email</span>
        <input
          onChange={handleChange}
          value={cred.email}
          type="text"
          name="email"
          placeholder="Email"
        />
      </div>
      <div class="input-container">
        <span class="input-label">Name</span>
        <input
          onChange={handleChange}
          value={cred.name}
          type="text"
          name="name"
          placeholder="Full name"
        />
      </div>
      <div class="input-container">
        <span class="input-label">Phone</span>
        <input
          onChange={handleChange}
          value={cred.phone}
          type="text"
          name="phone"
          placeholder="Phone"
        />
      </div>
      <div class="input-container">
        <span class="input-label">Password</span>
        <input
          onChange={handleChange}
          value={cred.password}
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <button class="auth-btn">Continue</button>
    </form>
  )
}
