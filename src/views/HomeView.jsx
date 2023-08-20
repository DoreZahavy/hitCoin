import React from 'react'

import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'
import { useState, useEffect } from 'react'
import { MoveList } from '../cmps/MoveList'
import { useSelector } from 'react-redux'
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom'
import { logout } from '../store/actions/user.actions'
import { svgService } from '../services/svg.service'

export function HomeView() {
  // const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const [bitcoinRate, setBitcoinRate] = useState(null)
  const loggedinUser = useSelector((state) => state.userModule.loggedinUser)
  // if(!loggedinUser) navigate(`/userauth`)

  useEffect(() => {
    if (!loggedinUser) navigate(`/userauth`)
    // loadUser()
  }, [])

  useEffect(() => {
    if (loggedinUser) loadBitcoinRate()
  }, [loggedinUser])

  async function loadUser() {
    const currUser = await userService.getLoggedinUser()
    setUser(currUser)
  }

  async function loadBitcoinRate() {
    const userBitcoinRate = await bitcoinService.getRate(loggedinUser.coins)
    setBitcoinRate(userBitcoinRate)
  }

  function filteredMoves() {
    return loggedinUser.moves.slice(0, 3)
  }

  if (!bitcoinRate || !loggedinUser) return
  return (
    <section className="home-view">
      <section>
        <div className="welcome flex align-center">
          <h1>Welcome {loggedinUser.name}</h1>
          <span onClick={logout} className="logout-icon">
            {svgService.getSvg('logout')}
          </span>
        </div>
        <p>Your coins → ${loggedinUser.coins}</p>
        <p>Bitcoin rate/$ → {bitcoinRate}</p>
        <p>your Bitcoin → {bitcoinRate * loggedinUser.coins}</p>
      </section>
      <section>
        <h4>your last 3 moves!</h4>
        <MoveList moves={filteredMoves()} />
      </section>
    </section>
  )
}
