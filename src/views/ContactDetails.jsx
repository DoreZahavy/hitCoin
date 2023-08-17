import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
// import { contactService } from '../services/contact.service'
import { Loader } from '../cmps/Loader'
import { TransferFund } from '../cmps/TransferFund'
import { MoveList } from '../cmps/MoveList'
import { svgService } from '../services/svg.service'
import { userService } from '../services/user.service'

export function ContactDetails() {
  const [contact, setContact] = useState(null)

  // const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    loadContact()
  }, [params.id])

  function loadContact() {
    const contact = userService.getContactById(params.id)
    setContact(contact)
  }

  function onAddMove(move) {}

  if (!contact) return <Loader />
  return (
    <section className="contact-details">
      <div className="details-action">
        <Link to="/contact">
          <span>{svgService.getSvg('times')}</span>
        </Link>
        <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
      </div>
      <img src={`https://robohash.org/${contact._id}`} />
      <section>
        <h1>{contact.name}</h1>
      </section>
      <section>
        <h3>{contact.email}</h3>
      </section>
      <section>
        <h3>{contact.phone}</h3>
      </section>
      <TransferFund contact={contact} />
      <MoveList />
    </section>
  )
}
