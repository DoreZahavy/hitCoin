import React from 'react'

export function MovePreview({ move, loggedinUserId }) {
  //   console.log("🚀 ~ file: MoveList.jsx:4 ~ MoveList ~ moves:", move)
  const moveStyling = {
    background:(move.from_user === loggedinUserId)
        ? 'linear-gradient(to right, #fe8c00, #f83600)'
        :  'linear-gradient(to right, #4facfe, #00f2fe)',
  }
  
  //   if (!moves || moves.length === 0) return <p>no transfers yet</p>
  return (
    <article className="move-preview flex column align-center" style={moveStyling}>
      <p className='date'>
        At{' '}
        {Date(move.at * 1000)
          .split(' ')
          .slice(0, 5)
          .join(' ')}
      </p>
      <p className='coins'>${move.coins}</p>
      {loggedinUserId === move.from_user ? (
        <h3>To {move.to_user_name}</h3>
      ) : (
        <h3>From {move.from_user_name}</h3>
      )}
      {/* <p>To {move.to}</p> */}
    </article>
  )
}
