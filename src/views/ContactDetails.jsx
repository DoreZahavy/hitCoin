import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
// import { contactService } from '../services/contact.service'
import { Loader } from '../cmps/Loader'
import { TransferFund } from '../cmps/TransferFund'
import { MoveList } from '../cmps/MoveList'
import { svgService } from '../services/svg.service'
import { userService } from '../services/user.service'
import { showErrorMsg,showSuccessMsg } from '../services/event-bus.service'


export function ContactDetails() {
  const [contact, setContact] = useState(null)

  // const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    loadContact()
  }, [params.id])

  function loadContact() {
    const contact = userService.getContactById(params.id)
    console.log("🚀 ~ file: ContactDetails.jsx:24 ~ loadContact ~ contact:", contact)
    
    setContact(contact)
  }

  function onAddMove(move) {}

  if (!contact) return <Loader />
  return (
    <section className="contact-details">
      <div className="details-action">
        <Link to="/contact">
          <span>{svgService.getSvg('back')}</span>
        </Link>
        {/* <Link to={`/contact/edit/${contact.id}`}>Edit</Link> */}
      </div>
      <img src={`https://robohash.org/${contact.id}`} />
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
