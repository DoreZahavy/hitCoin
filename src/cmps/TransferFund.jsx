import React from 'react'

export function TransferFund({contact}) {
  // if(!contact) return <p>no contact</p>
  return (
    <section className="transfer-fund">
      {/* <pre>{contact.name}</pre> */}
      <p>Transfer coins to {contact.name.split(' ')[0]}</p>
      <input type="number" name="transfer" id="transfer" max={contact.coins} />
    </section>
  )
}
//max={contact.coins}
