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
    <form className='user-auth' onSubmit={(ev) => onLogin(ev,cred)}>
      <h1>logIn</h1>
      
        <span className="input-label">Email</span>
        <input
          onChange={handleChange}
          type="text"
          value={cred.email}
          name="email"
          placeholder="Email"
        />
      
    
        <span className="input-label">Password</span>
        <input
          onChange={handleChange}
          type="password"
          value={cred.password}
          name="password"
          placeholder="Password"
        />
     
      <button className="auth-btn">Log in</button>
    </form>
  )
}
