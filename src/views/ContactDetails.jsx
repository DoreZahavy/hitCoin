import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { contactService } from '../services/contact.service'
import { Loader } from '../cmps/Loader'

export function ContactDetails() {
  const [contact, setContact] = useState(contactService.getEmptyContact())

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    loadContact()
  }, [params.id])
  async function loadContact() {
    const contact = await contactService.getContactById(params.id)
    setContact(contact)
  }

  if (!contact) return <Loader />
  return (
    <section className="contact-details">
      <div className="details-action">
        <Link to='/contact'>Back</Link>
        <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
      </div>
      <img src={`https://robohash.org/${contact._id}`} />
      <section>
        <h3>{contact.name}</h3>
      </section>
      <section>
        <h3>{contact.email}</h3>
      </section>
      <section>
        <h3>{contact.phone}</h3>
      </section>
    </section>
  )
}
