import React from 'react'
import Signup from '../cmps/Signup'
import Login from '../cmps/Login'
import { useState } from 'react'
import { showErrorMsg,showSuccessMsg } from '../services/event-bus.service'

async function onSignup() {
    try {
        await this.$store.dispatch({ type: 'signup', signupInfo:this.signupInfo })
        showSuccessMsg(`Signup successful`)
    }
    catch (err) {
        console.log('Cannot signup', err)
        showErrorMsg(`Cannot signup`)
    }
}
async function onLogin() {
    try {
        await this.$store.dispatch({ type: 'login', credentials:this.credentials })
        showSuccessMsg(`Login successful`)
    }
    catch (err) {
        console.log('Cannot login', err)
        showErrorMsg(`Cannot login`)
    }

}

export function UserAuth() {
  const [isSignup, setIsSignup] = useState(true)
  return (
    <section class="login-signup">
      {isSignup ? <Signup onSignup={onSignup}/> : <Login onLogin={onLogin}/>}
      <div class="switch">
        {isSignup ? 'Already have an account?' : `Don't have an account yet?`}
        <a onClick={(isSignup = !isSignup)}>
          {isSignup ? ' Log in' : ' Sign up'}
        </a>
      </div>
    </section>
  )
}
