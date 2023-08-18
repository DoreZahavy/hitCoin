import React from 'react'
import { useState } from 'react'

export function Login({ onLogin }) {
  const [cred, setCred] = useState({ email: '', password: '' })

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
    <form v-else onSubmit={() => onLogin(cred)}>
      <h1>logIn</h1>
      <div class="input-container">
        <span class="input-label">Email</span>
        <input
          onChange={handleChange}
          type="text"
          value={cred.email}
          name="email"
          placeholder="Email"
        />
      </div>
      <div class="input-container">
        <span class="input-label">Password</span>
        <input
          onChange={handleChange}
          type="password"
          value={cred.password}
          name="password"
          placeholder="Password"
        />
      </div>
      <button class="auth-btn">Log in</button>
    </form>
  )
}
