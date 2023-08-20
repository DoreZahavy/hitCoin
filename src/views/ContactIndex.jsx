import React, { useEffect, useState } from 'react'
import { contactService } from '../services/contact.service'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { Loader } from '../cmps/Loader'
import { useSelector } from 'react-redux'
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { svgService } from '../services/svg.service'
import { removeContact, setModal } from '../store/actions/user.actions'

export function ContactIndex() {
  const navigate = useNavigate()

  // const [contacts, setContacts] = useState(null)
  const [filterBy, setFilterBy] = useState({ term: '' })
  // const [modalClass, setModalClass] = useState('')

  const params = useParams()
  // if(window.location.toString().includes("/contact/add")) setModalClass('open-modal')
  // const contacts = useSelector(state => state.userModule.loggedinUser.contacts)
  const loggedinUser = useSelector((state) => state.userModule.loggedinUser)
  const contactModal = useSelector((state) => state.userModule.contactModal)

  // if (!loggedinUser) navigate(`/userauth`)
  

  useEffect(() => {
    if(!loggedinUser) navigate(`/userauth`)
  }, [])

  useEffect(() => {
    console.log('hi');
    if (params.id || window.location.toString().includes("/contact/add")) setModal('open-modal')
    else if( !params.id && !window.location.toString().includes("/contact/add")) setModal('')
    else setModal('')
  }, [params.id,window.location])

  function onChangeFilter(filterBy) {
    setFilterBy(filterBy)
  }

  function filteredContacts() {
    const term = filterBy.term.toLocaleLowerCase()
    return contacts.filter((contact) => {
      return (
        contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
      )
    })
  }

  function onRemoveContact(ev,contactId){
    ev.preventDefault()
    removeContact(contactId)
  }

  // const contactToDisplay = filteredContacts()

  if (!loggedinUser) return <Loader /> //<div>Loading...</div>
  const {contacts} = loggedinUser
  return (
    <section className={`contact-index ${contactModal}`}>
      <section className="index-container">
        <ContactFilter onChangeFilter={onChangeFilter} filterBy={filterBy} />
        <Link className='add-link' to="/contact/add" onClick={()=>setModal('open-modal')}>{svgService.getSvg('add')}</Link>
        <ContactList onRemoveContact={onRemoveContact} contacts={filteredContacts()} />
      </section>
      <section className="router-modal">
        <Outlet />
      </section>
    </section>
  )
}
