import React from 'react'
import { FaBeer } from 'react-icons/fa';
export default function Card({title,Description,icon}) {
  return (
    <div className='box'>
      <div className='icon'>
       {icon}
      </div>
      <h2>{title}</h2>
     <p>{Description}</p>
     
      
    </div>
  )
}
