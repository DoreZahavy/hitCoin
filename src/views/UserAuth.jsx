import React from 'react'
import {Signup} from '../cmps/Signup'
import {Login} from '../cmps/Login'
import { useState } from 'react'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, signup } from '../store/actions/user.actions'
import { useNavigate } from 'react-router-dom'
export function UserAuth() {
  const navigate = useNavigate()

  async function onSignup(ev,cred) {
    ev.preventDefault()
    try {
      await signup(cred)
      console.log('user auth cmp');
      showSuccessMsg(`Signup successful`)
      navigate('/')
    } catch (err) {
      console.log('Cannot signup', err)
      showErrorMsg(`Cannot signup`)
    }
  }
  async function onLogin(ev,cred) {
    ev.preventDefault()
    try {
      await login(cred)
      showSuccessMsg(`Login successful`)
      navigate('/')
    } catch (err) {
      console.log('Cannot login', err)
      showErrorMsg(`Cannot login`)
    }
  }
  const [isSignup, setIsSignup] = useState(true)

function toggleIsSignup(){
  setIsSignup(!isSignup)
}

  return (
    <section className="login-signup">
      {isSignup ? <Signup onSignup={onSignup} /> : <Login onLogin={onLogin} />}
      <div className="switch">
        {isSignup ? 'Already have an account?' : `Don't have an account yet?`}
        <a onClick={toggleIsSignup}>
          {isSignup ? ' Log in' : ' Sign up'}
        </a>
      </div>
    </section>
  )
}
