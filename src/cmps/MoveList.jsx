import React from 'react'

export function MoveList({moves}) {
  if (!moves || moves.length === 0) return <p>no transfers yet</p>
  return (
    <section className="move-list">
      {moves.map((move,idx)=>(
        <div className="move-preview" key={idx}>
          <p>to {move.to}</p>
          <p>at {move.at}</p>
          <p>amount {move.amount}</p>
        </div>
      ))}
    </section>
  )
}
