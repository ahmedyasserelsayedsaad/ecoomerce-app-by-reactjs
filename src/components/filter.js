import React, { useState } from 'react'
import Data from '../data'
const Filtering = () => {
    const [query,setQuery]=useState('')
    //console.log(Data.filter((item)=>item.title.toLocaleLowerCase().includes('ph')))
  return (
    <div>
        <div>
        <input placeholder='search...' type='text' onChange={(e)=>setQuery(e.target.value)} />
        </div>
        <ul>
            {
             Data.filter((titlele)=>titlele.title.toLocaleLowerCase().includes(query)).map((item)=>
                (
                    <li key={item.id}>{item.title}</li>
                )
             )
            }
        </ul>
    </div>
  )
}

export default Filtering