import React, { useState } from 'react'

export function TransferFund({contact,coins,onAddMove}) {
  const [amount,setAmount]=useState('')
  // if(!contact) return <p>no contact</p>

  function handleChange({target}){
    setAmount(target.value)
  }

  function readyMove(){
   
    onAddMove(contact.name,amount)
  }
  return (
    <section className="transfer-fund">
      {/* <pre>{contact.name}</pre> */}
      <p>Transfer coins to {contact.name.split(' ')[0]}</p>
      <input type="number" value={amount} onChange={handleChange} name="transfer" id="transfer" max={coins} />
      <button onClick={readyMove}>Send</button>
    </section>
  )
}
//max={contact.coins}
