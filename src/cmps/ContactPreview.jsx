import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({
  contact,
  onRemoveContact,
}) {
  // const contactStyle = {
  //   backgroundImage: `url(https://robohash.org/${contact._id})`,
  // }

  return (
    <Link replace to={`/contact/${contact.id}`} className="contact-preview">
      {/* <section  className="contact-info"> */}
        <img src={`https://robohash.org/${contact.id}`} alt="" />
        <div>
        <h2>{contact.name}</h2>
        {/* <h4>{contact.email}</h4> */}
        </div>
      {/* </section> */}
      {/* <section className="contact-actions">
        <button onClick={() => onRemoveContact(contact._id)}>X</button>
      </section> */}
    </Link>
  )
}
