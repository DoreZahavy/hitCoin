import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ContactPreview } from '../cmps/ContactPreview'
import { ContactFilter } from '../cmps/ContactFilter'
import { Loader } from '../cmps/Loader'
import { svgService } from '../services/svg.service'
import { Link } from 'react-router-dom'
export function ContactAdd() {
  // const [contacts,setContacts] = useState([])
  const [filterBy, setFilterBy] = useState({ term: '' })

  const users = useSelector((state) => state.userModule.users)
  const loggedinUser = useSelector((state) => state.userModule.loggedinUser)
  // function handleChange({target}){
  //   const field = target.name
  //   let value = target.value

  //   switch (target.type) {
  //     case 'number':
  //     case 'range':
  //       value = +value || ''
  //       break
  //     case 'checkbox':
  //       value = target.checked
  //     default:
  //       break
  //   }

  //   setFilterBy((prevFilterBy) => ({
  //     ...prevFilterBy,
  //     [field]: value,
  //   }))
  // }

  function onChangeFilter(filterBy) {
    setFilterBy(filterBy)
  }

  function filterContacts() {
    return users.filter((u) => {
      return (
        !loggedinUser.contacts.some((secondC) => secondC.id === u.id) &&
        u.id !== loggedinUser.id &&
        (u.name.toLocaleLowerCase().includes(filterBy.term) ||
          u.phone.toLocaleLowerCase().includes(filterBy.term) ||
          u.email.toLocaleLowerCase().includes(filterBy.term))
      )
    })
  }

  if (!users || !loggedinUser) return <Loader />
  const contactsToDisplay = filterContacts()
  return (
    <section className="contact-add">
      <Link to="/contact">
        <span className="back-svg">{svgService.getSvg('back')}</span>
      </Link>

      <ContactFilter onChangeFilter={onChangeFilter} filterBy={filterBy} />
      {/* <input type="text" name='txt' value={filterBy.txt} onChange={handleChange} placeholder='Look for contacts'/> */}
      <div className="add-contact-list">
        {contactsToDisplay.map((contact) => (
          <ContactPreview key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  )
}
