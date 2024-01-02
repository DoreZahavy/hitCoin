import React from 'react'
import { MovePreview } from './MovePreview'


export function MoveList({moves,loggedinUserId}) {
  console.log("🚀 ~ file: MoveList.jsx:4 ~ MoveList ~ moves:", moves)
  
  if (!moves || moves.length === 0) return <p>no transfers yet</p>
  return (
    <section className="move-list">
      {moves.map((move,idx)=>(
        <MovePreview move={move} loggedinUserId={loggedinUserId} key={move.id}/>
        
      ))}
    </section>
  )
}
{/* <div className="move-preview" key={idx}>
          <p>To {move.to}</p>
          <p>At {Date(move.at*1000).split(' ').slice(0,5).join(' ')}</p>
          <p>{move.amount} Coins</p>
        </div> */}