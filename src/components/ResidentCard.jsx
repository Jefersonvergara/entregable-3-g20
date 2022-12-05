
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const ResidentCard = ({url}) => {

const [resident, setResident] = useState()

useEffect(() => {

  axios.get(url)
  .then(res => setResident( res.data))
  .catch(err => console.log(err))
}, [])

  return (
   <article>
    <header>
      <img src={resident?.image} alt="" />
      <div>
        <span className='circle'> </span>
        <span>{resident?.status}</span>
      </div>
    </header>
    <section>
      <h3>
        {resident?.name}
      </h3>
      <ul>
        <li><span>Species:</span> <span>{resident?.species}</span></li>
        <li><span>Origin:</span> <span>{resident?.origin.name}</span></li>
        <li><span>Epidodies Where Apper :</span> {resident?.episode.length}<span></span></li>
        <li><span>Type of Specie: </span> <span>{resident?.species}</span></li>
      </ul>
    </section>
   </article>
  )
}

export default ResidentCard