import React from 'react'

import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'
import { useState, useEffect } from 'react'
import { MoveList } from '../cmps/MoveList'
import { useSelector } from 'react-redux'
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom'
import { loadContacts, logout, queryMoves } from '../store/actions/user.actions'
import { svgService } from '../services/svg.service'

export function HomeView() {
  // const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const [bitcoinRate, setBitcoinRate] = useState(null)
  const loggedinUser = useSelector((state) => state.userModule.loggedinUser)
  const moves = useSelector((state) => state.userModule.moves)
  // if(!loggedinUser) navigate(`/userauth`)

  useEffect(() => {
    queryMoves(loggedinUser.id)
    // if (!loggedinUser) navigate(`/userauth`)
    // loadUser()
  }, [])

  useEffect(() => {
    if (loggedinUser) loadBitcoinRate()
  }, [loggedinUser])

  // async function loadUser() {
  //   const currUser = await userService.getLoggedinUser()
  //   setUser(currUser)
  // }

  async function loadBitcoinRate() {
    const userBitcoinRate = await bitcoinService.getRate(loggedinUser.coins)
    setBitcoinRate(userBitcoinRate)
  }

  async function filteredMoves() {
    // return loggedinUser.moves.slice(0, 3)
    // return await userService.queryMoves(loggedinUser.id).slice(0, 3)
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
        <div className='user-data'>
          <p>Current Balance</p>
          <p> ${loggedinUser.coins}</p>
          <p>USD / Bitcoin Rate</p>
          <p>{bitcoinRate}</p>
          <p>your Bitcoin </p>
          <p> {(bitcoinRate * loggedinUser.coins).toFixed(8)}</p>
        </div>
      </section>
      <section className="last-moves flex column align-center">
        <h4>Last Moves</h4>
        <MoveList moves={moves} loggedinUserId={loggedinUser.id} />
      </section>
    </section>
  )
}
