
import React from 'react'
import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, onRemoveContact, onSelectContactId }) {
    return (
        <section className="contact-list simple-cards-grid">
            {contacts.map(contact =>
                <ContactPreview
                    onRemoveContact={onRemoveContact}
                    key={contact._id}
                    contact={contact}
                    onSelectContactId={onSelectContactId}
                />
            )}
        </section>
    )
}
