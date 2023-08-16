import React from "react";

export function ContactPreview({
  contact,
  onRemoveContact,
  onSelectContactId,
}) {
  const contactStyle = {
    backgroundImage: `url(https://robohash.org/${contact._id})`,
  };

  return (
    <article style={contactStyle} className="contact-preview">
      <section onClick={() => onSelectContactId(contact._id)} className="info">
        <h2>{contact.name}</h2>
        <h4>{contact.email}</h4>
      </section>
      <section className="actions">
        <button onClick={() => onRemoveContact(contact._id)}>X</button>
      </section>
    </article>
  );
}
