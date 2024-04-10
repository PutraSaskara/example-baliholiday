import React from 'react'
import { ImCross } from "react-icons/im";

function NotIncludedList({notinclude1, notinclude2}) {
  return (
    <div className='mt-5'>
        {notinclude1 && (
          <div className='flex gap-1 items-center'>
              <ImCross size={20}/>
              <h3>{notinclude1}</h3>
          </div>
        )}
        {notinclude2 && (
          <div className='flex gap-1 items-center'>
              <ImCross size={20}/>
              <h3>{notinclude2}</h3>
          </div>
        )}
    </div>
  )
}

export default NotIncludedList
