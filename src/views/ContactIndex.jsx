import React, { useEffect, useState } from 'react'
import { contactService } from '../services/contact.service'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { Loader } from '../cmps/Loader'
import { Link, Outlet,useParams } from 'react-router-dom'

export function ContactIndex() {
  const [contacts, setContacts] = useState(null)
  const [filterBy, setFilterBy] = useState({ term: '' })
  const [modalClass, setModalClass] = useState('')
  const params = useParams()
  useEffect(() => {
    console.log('hi');
    if(params.id) setModalClass('open-modal')
    else setModalClass('') 
  }, [params.id])

  useEffect(() => {
    loadContacts()
  }, [filterBy])

  async function loadContacts() {
    const contacts = await contactService.query(filterBy)
    setContacts(contacts)
  }

  function onChangeFilter(filterBy) {
    setFilterBy(filterBy)
  }

  async function onRemoveContact(contactId) {
    try {
      await contactService.remove(contactId)
      loadContacts()
      // setContacts(prevContacts => {
      //     return prevContacts.filter(contact => contact._id !== contactId)
      // })
    } catch (error) {
      console.log('error:', error)
    }
  }

  if (!contacts) return <Loader /> //<div>Loading...</div>
  return (
    <section className={`contact-index ${modalClass}`}>
      <section className="index-container">
        <ContactFilter onChangeFilter={onChangeFilter} filterBy={filterBy} />
        <ContactList onRemoveContact={onRemoveContact} contacts={contacts} />
      </section>
      <section className='router-modal'>
        <Outlet />
      </section>
    </section>
  )
}
