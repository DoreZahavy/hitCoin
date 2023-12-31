import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
// import { contactService } from '../services/contact.service'
import { Loader } from '../cmps/Loader'
import { TransferFund } from '../cmps/TransferFund'
import { MoveList } from '../cmps/MoveList'
import { svgService } from '../services/svg.service'
import { userService } from '../services/user.service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { useSelector } from 'react-redux'
import { addContact, addMove, loadContact, setModal } from '../store/actions/user.actions'
import { useEffectUpdate } from '../customHooks/useEffectUpdate'
export function ContactDetails() {
  // const [contact, setContact] = useState(null)
  const loggedinUser = useSelector((state) => state.userModule.loggedinUser)
  const contact = useSelector((state) => state.userModule.contactDetails)

  // const navigate = useNavigate()
  const params = useParams()

  useEffectUpdate(() => {
    if(!params.id) return 
    loadContact(loggedinUser.id,params.id)
  }, [params.id])

  useEffectUpdate(()=>{
    console.log('contact: ',contact);
  },[contact])

  // function loadContact() {
  //   const contact = userService.getContactById(params.id)

  //   setContact(contact)
  // }

  function onAddMove(to, coins) {
    const move = {
      to,
      coins,
      from: loggedinUser.id,
    }
    addMove(move)
  }

  

  // function filteredMoves() {
  //   return loggedinUser.moves.filter((move) => move.to === contact.name)
  // }

  if (!contact) return <Loader />
  return (
    <section className="contact-details">
      <div className="details-action">
        <Link onClick={()=>setModal('')} to="/contact">
          <span>{svgService.getSvg('back')}</span>
        </Link>
        {/* <span onClick={()=>onAddContact(contact)}>{svgService.getSvg('add')}</span> */}

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
      <TransferFund
        contact={contact}
        coins={loggedinUser.coins}
        onAddMove={onAddMove}
      />
      <MoveList moves={contact.moves} />
    </section>
  )
}
