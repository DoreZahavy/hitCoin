import React from 'react'

import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'
import { useState, useEffect } from 'react'
import { MoveList } from '../cmps/MoveList'

export function HomeView() {
  const [user, setUser] = useState(null)
  const [bitcoinRate, setBitcoinRate] = useState(null)

  useEffect(() => {
    loadUser()
  }, [])

  useEffect(() => {
    if (user) loadBitcoinRate()
  }, [user])

  async function loadUser() {
    const currUser = await userService.getLoggedinUser()
    setUser(currUser)
  }

  async function loadBitcoinRate() {
    const userBitcoinRate = await bitcoinService.getRate(user.coins)
    setBitcoinRate(userBitcoinRate)
  }

  if (!bitcoinRate || !user) return
  return (
    <section className="home-view">
      <section>
        <h1>Welcome {user.name}</h1>
        <p>user coins: ${user.coins}</p>
        <p>bitcoin rate for 1$: {bitcoinRate}</p>
        <p>user bitcoin: {bitcoinRate * user.coins}</p>
      </section>
      <section>
        <h4>your last 3 moves!</h4>
        <MoveList/>
      </section>
    </section>
  )
}
