import React from 'react'
import { useGetScheduleQuery } from '../../features/Register/registerApi'

const Schedule = () => {
    const {data:schedules, isError,isFetching}=useGetScheduleQuery()
    console.log(schedules)
    



  return (
    <div  className='schedule-container'>
        <select onChange={handleChange} value={selectedPosition}>
                <option value="">Select an Job/Position</option>
                    {schedules&&schedules.map((schedule,index)=>(
                         <option key={schedule.schedule_id} value={schedule.position_id}>{schedule.schedule_description}</option>
                            ))}
        </select>

    </div>
  )
}

export default Schedule