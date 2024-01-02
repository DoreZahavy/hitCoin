import { useEffect, useState } from 'react'
import { svgService } from '../services/svg.service'
import { useForm } from '../customHooks/useForm'

export function ContactFilter(props) {


  const [register] = useForm(props.filterBy, props.onChangeFilter)


  

  // const { term } = filterBy
  return (
    <form className="contact-filter">
      <span>{svgService.getSvg('search')}</span>
      <input  {...register('term')}
        // onChange={handleChange}
        // value={term}
        // type="text"
        // name="term"
        // placeholder='Search'
      />
    </form>
  )
}
