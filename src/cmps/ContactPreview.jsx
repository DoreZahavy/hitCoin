import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, callBack }) {
  // const contactStyle = {
  //   backgroundImage: `url(https://robohash.org/${contact._id})`,
  // }
var link = callBack.toString().includes('onRemove') 
?contact.id:'add'
  return (
    <Link replace to={`/contact/${link}`} className="contact-preview">
      <section className="contact-info">
        <img src={`https://robohash.org/${contact.id}`} alt="" />
        <div>
          <h2>{contact.name}</h2>
          {/* <h4>{contact.email}</h4> */}
        </div>
      </section>
      <section className="contact-actions">
        {callBack.toString().includes('onRemove') ? (
          <button onClick={(ev) => callBack(ev,contact.id)}>X</button>
        ) : (
          <button onClick={(ev) => callBack(ev,contact)}>+</button>
        )}
        {/* <button onClick={() => callBack(contact.id)}>X</button> */}
      </section>
    </Link>
  )
}
