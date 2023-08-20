import { useEffect, useState } from 'react'
import { svgService } from '../services/svg.service'
import { useForm } from '../customHooks/useForm'

export function ContactFilter(props) {
  const [filterBy, setFilterBy] = useState(props.filterBy)
// const [register] = useForm(props.filterBy,props.onChangeFilter)
  useEffect(() => {
    props.onChangeFilter(filterBy)
  }, [filterBy])

  function handleChange({ target }) {
    const field = target.name
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value || ''
        break
      case 'checkbox':
        value = target.checked
      default:
        break
    }

    setFilterBy((prevFilterBy) => ({
      ...prevFilterBy,
      [field]: value,
    }))
  }

  const { term } = filterBy
  return (
    <form className="contact-filter">
      <span>{svgService.getSvg('search')}</span>
      <input 
        onChange={handleChange}
        value={term}
        type="text"
        name="term"
        placeholder='Search'
      />
    </form>
  )
}
