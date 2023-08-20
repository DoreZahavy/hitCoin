import React from 'react'

export function MoveList({moves}) {
  if (!moves || moves.length === 0) return <p>no transfers yet</p>
  return (
    <section className="move-list">
      {moves.map((move,idx)=>(
        <div className="move-preview" key={idx}>
          <p>To {move.to}</p>
          <p>At {Date(move.at*1000).split(' ').slice(0,5).join(' ')}</p>
          <p>{move.amount} Coins</p>
        </div>
      ))}
    </section>
  )
}
