import React, { useState,useEffect } from 'react'
import { contactService } from '../services/contact.service'
import { useNavigate, useParams ,Link} from 'react-router-dom'
import { svgService } from '../services/svg.service'
import { showErrorMsg,showSuccessMsg } from '../services/event-bus.service'


export function ContactEdit() {
  const [contact, setContact] = useState(contactService.getEmptyContact())

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadContact()
  }, [])

  async function loadContact() {
    const contactId = params.id
    try {
      if (contactId) {
        const contact = await contactService.getContactById(contactId)
        setContact(contact)
      }
    } catch (error) {
      console.log('error:', error)
    }
  }

  function handleChange({ target }) {
    const field = target.name
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value || ''
        break
      case 'checkbox':
        value = target.checked
      default:
        break
    }

    setContact((prevContact) => ({
      ...prevContact,
      [field]: value,
    }))
  }
  async function onSaveContact(ev) {
    ev.preventDefault()
    try {
      await contactService.save(contact)
      navigate(`/contact/${contact._id}`)
    } catch (error) {}
  }
  const { name, email, phone } = contact
  return (
    <section className="contact-edit">
      <Link to='/contact'>Back</Link>
      <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
      <Link to={`/contact/${contact._id}`}><img src={`https://robohash.org/${contact._id}`} /></Link>
      <form onSubmit={onSaveContact}></form>
      <label htmlFor="name">Name</label>
      <input
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        id="name"
      />
      <label htmlFor="email">Email</label>
      <input
        onChange={handleChange}
        value={email}
        type="text"
        name="email"
        id="email"
      />
      <label htmlFor="phone">Phone</label>
      <input
        onChange={handleChange}
        value={phone}
        type="text"
        name="phone"
        id="phone"
      />
    </section>
  )
}
