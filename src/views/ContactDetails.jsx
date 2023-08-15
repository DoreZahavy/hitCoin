import React, { useEffect, useState } from "react";
import { contactService } from "../services/contactService";

export function ContactDetails({ contactId, onBack }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    loadContact();
  }, [])

  async function loadContact() {
    const contact = await contactService.getById(contactId);
    setContact(contact);
  }

  if (!contact) return <div>Loading...</div>;
  return (
    <section className="contact-details">
      <section>
        <h3>Model: {contact.model}</h3>
      </section>
      <section>
        <h3>Type: {contact.type}</h3>
      </section>
      <section>
        <h3>batteryStatus: {contact.batteryStatus}</h3>
      </section>
      <img src={`https://robohash.org/${contact._id}`} />
      <button onClick={onBack}>Back</button>
    </section>
  )
}
