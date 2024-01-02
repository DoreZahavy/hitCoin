import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import reactLogo from '../assets/svgs/react.svg'
import { useSelector } from 'react-redux'
import { login } from '../store/actions/user.actions'
import { useNavigate } from 'react-router-dom'
import { useEffectUpdate } from '../customHooks/useEffectUpdate'

export function AppHeader() {
  const navigate = useNavigate()
  const loggedinUser = useSelector((state) => state.userModule.loggedinUser)
// useEffectUpdate(()=>{
//   if(loggedinUser) navigate('/')
// },[loggedinUser])

  async function startAsGuest() {
    await login({ email: 'guest@renovize.com', password: 'password1' })
    navigate('/')
  }

  const navBar = (
    <nav className="header-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contacts</NavLink>
      <NavLink to="/statistics">Stats</NavLink>
    </nav>
  )
  return (
    <section className="app-header full main-layout">
      <section className="header-container">
        <div className="logo react-logo">
          hitCoin
          {/* <img src={reactLogo} />
          in */}
        </div>
        {loggedinUser ? (
          navBar
        ) : (
          <button className='start-as-guest' onClick={startAsGuest}>Start as guest</button>
        )}
      </section>
    </section>
  )
}
