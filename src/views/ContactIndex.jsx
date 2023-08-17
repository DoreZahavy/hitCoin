import React, { useEffect, useState } from 'react'
import { contactService } from '../services/contact.service'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { Loader } from '../cmps/Loader'
import { useSelector } from 'react-redux'
import { Link, Outlet,useParams } from 'react-router-dom'

export function ContactIndex() {
  // const [contacts, setContacts] = useState(null)
  const [filterBy, setFilterBy] = useState({ term: '' })
  const [modalClass, setModalClass] = useState('')

  const params = useParams()
  const contacts = useSelector(state => state.userModule.loggedinUser.contacts)

  useEffect(() => {
    if(params.id) setModalClass('open-modal')
    else setModalClass('') 
  }, [params.id])

  function onChangeFilter(filterBy) {
    setFilterBy(filterBy)
  }

  function filteredContacts(){
    const term = filterBy.term.toLocaleLowerCase()
    return contacts.filter((contact) => {
      return (
        contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
      )
    })
  }

  // const contactToDisplay = filteredContacts()

  if (!contacts) return <Loader /> //<div>Loading...</div>
  return (
    <section className={`contact-index ${modalClass}`}>
      <section className="index-container">
        <ContactFilter onChangeFilter={onChangeFilter} filterBy={filterBy} />
        <ContactList  contacts={filteredContacts()} />
      </section>
      <section className='router-modal'>
        <Outlet />
      </section>
    </section>
  )
}
