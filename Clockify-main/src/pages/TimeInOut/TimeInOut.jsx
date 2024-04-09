import React from 'react'
import '../TimeInOut/TimeInOut.scss'


const TimeInOut = () => {
  return (
       <div className='timeinout-container'>
        <div className='title-bar'>
            <span>TimeIn /Time Out</span>
        </div>

        <div className='content-wrapper'>
            <div className='checkinout-form'>
            
                    <div className='label-input-group'>
                        <label htmlFor="time-in">Time in</label>
                        <input type="time"  placeholder='hh:mm'/>
                        <button>Submit</button>
                    </div>

                    <div className='label-input-group'>
                        <label htmlFor="time-out">Time out </label>
                        <input type="time"  placeholder='hh:mm'/>
                        <button>Submit</button>
                    </div>
                
            </div>
          
        </div>

            
       </div>
  )
}

export default TimeInOut