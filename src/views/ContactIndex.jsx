import React, { useEffect, useState } from 'react'
import { contactService } from '../services/contact.service'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'

export function ContactIndex() {

    const [contacts, setContacts] = useState(null)
    const [selectedContactId, setSelectedContactId] = useState(null)
    const [filterBy, setFilterBy] = useState({
        term: '',
    })

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

    function onSelectContactId(contactId) {
        setSelectedContactId(contactId)
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

    if (!contacts) return <div>Loading...</div>
    return (
        <section className="contact-index">           
            <ContactFilter onChangeFilter={onChangeFilter} filterBy={filterBy} />
            <ContactList onSelectContactId={onSelectContactId} onRemoveContact={onRemoveContact} contacts={contacts} />
        </section>
    )
}
