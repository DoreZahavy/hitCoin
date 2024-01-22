import React from "react";
import { ContactPreview } from "./ContactPreview";

export function ContactList({ contacts, onRemoveContact }) {
  return (
    <section className="contact-list simple-cards-grid">
      
      {contacts.map((contact) => (
        <ContactPreview
          callBack={onRemoveContact}
          key={contact.id}
          contact={contact}
          add={false}
        />
      ))}
    </section>
  );
}
