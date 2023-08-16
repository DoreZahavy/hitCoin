import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
    const contact = await contactService.getById(params.id)
    setContact(contact)
  }

  if (!contact) return <Loader/>
  return (
    <section className="contact-details">
      <section>
        <h3>Model: {contact.model}</h3>
      </section>
      <section>
        <h3>Type: {contact.type}</h3>
      </section>
      <section>
        <h3>batteryStatus: {contact.batteryStatus}</h3>
      </section>
      <img src={`https://robohash.org/${contact._id}`} />
      <button>Back</button>
    </section>
  )
}
