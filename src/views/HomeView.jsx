import React from 'react'

import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'
import { useState, useEffect } from 'react'
import { MoveList } from '../cmps/MoveList'
import { useSelector } from 'react-redux'
import { Link, Outlet,useParams,useNavigate } from 'react-router-dom'
import { logout } from '../store/actions/user.actions'


export function HomeView() {
  // const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const [bitcoinRate, setBitcoinRate] = useState(null)
  const loggedinUser = useSelector(state => state.userModule.loggedinUser)
// if(!loggedinUser) navigate(`/userauth`)


  useEffect(() => {
    if(!loggedinUser) navigate(`/userauth`)
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

  function filteredMoves(){
    return loggedinUser.moves.slice(0,3)
  }

  if (!bitcoinRate || !loggedinUser) return
  return (
    <section className="home-view">
      <section>
        <div className="">
        <h1>Welcome {loggedinUser.name}</h1>
        <span onClick={logout} className="logout-icon">logout</span>
        </div>
        <p>user coins: ${loggedinUser.coins}</p>
        <p>bitcoin rate for 1$: {bitcoinRate}</p>
        <p>user bitcoin: {bitcoinRate * loggedinUser.coins}</p>
      </section>
      <section>
        <h4>your last 3 moves!</h4>
        <MoveList moves={filteredMoves()}/>
      </section>
    </section>
  )
}
