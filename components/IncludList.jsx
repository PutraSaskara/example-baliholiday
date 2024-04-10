import React from 'react'
import { TiTick } from "react-icons/ti";

function IncludList({include1, include2, include3}) {
  return (
    <div className='mt-5'>
        {include1 && (
          <div className='flex gap-1 items-center'>
              <TiTick size={30}/>
              <h3>{include1}</h3>
          </div>
        )}
        {include2 && (
          <div className='flex gap-1 items-center'>
              <TiTick size={30}/>
              <h3>{include2}</h3>
          </div>
        )}
        {include3 && (
          <div className='flex gap-1 items-center'>
              <TiTick size={30}/>
              <h3>{include3}</h3>
          </div>
        )}
    </div>
  )
}

export default IncludList
