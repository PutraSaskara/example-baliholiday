import React from 'react'
import { TiTick } from "react-icons/ti";

function Cancellation({cancel1, cancel2}) {
  return (
    <div className='mt-5'>
        {cancel1 && (
          <div className='flex gap-2 items-center'>
              <div>
                <TiTick size={30}/>
              </div>
              <h3>{cancel1}</h3>
          </div>
        )}
        {cancel2 && (
          <div className='flex gap-2 items-center'>
              <div>
                <TiTick size={30}/>
              </div>
              <h3>{cancel2}</h3>
          </div>
        )}
    </div>
  )
}

export default Cancellation
