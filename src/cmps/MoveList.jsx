import React from 'react'

export function MoveList({moves}) {
  if (!moves || moves.length === 0) return <p>no transfers yet</p>
  return (
    <section className="move-list">
      {moves.map(move=>(
        <div className="move">
          <p>to {move.to}</p>
          <p>at {move.createdAt}</p>
          <p>amount {move.amount}</p>
        </div>
      ))}
    </section>
  )
}
