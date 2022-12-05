import React from 'react'

const LocationInfo = ({location}) => {
  
  
  return (
    <article>
        <h1>{location?.name}</h1>
        
        <ul>
            <li><span>Type: {location?.type}</span></li>
            <li><span>Dimension: {location?.dimension}</span></li>
            <li><span>Population: {location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo
