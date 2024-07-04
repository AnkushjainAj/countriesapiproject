import React from 'react'
import { Link } from 'react-router-dom'

export default function Countrycard({name,flag,population,capital,region,data}) {
   
  return (
    
    <Link className="country-card" to={`/${name}`} state={data}>

          <img src={flag} alt={name + ' flag'}/>
          <div class="card-text">
              <h3 class="card-title">{name}</h3>
              <p><b>Population: </b>{population.toLocaleString('en-IN')}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital}</p>

        
          </div>
  </Link>
  
  )
}
