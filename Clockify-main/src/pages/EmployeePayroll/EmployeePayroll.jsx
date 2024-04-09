import React from 'react'

const EmployeePayroll = () => {
  return (
    <div className='payroll-container'>
    <div className='title-bar'>
       <span>Payroll </span>
   </div>

   <div className='content-wrapper'>
   <div className='search-add-new-btn'>
           
           <div  className='button-wrapper'>
                   <button className='add-new-btn'> Export to PDF </button>
           </div>
          
       </div>
   <table>
           <thead>
               <tr>
                   <th>Employee Id</th>
                   <th>Employee Name</th>
                   <th>Working Hours/Rate</th>
                   <th>Overtime</th>
                   <th>Gross Pay</th>
                   <th>Deductions</th>
                   <th>Advance Pay</th>
                   <th>Net Pay</th>
                   <th>Actions</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td>1</td>
                   <td>Stephen Ondieki</td>
                   <td>8/200</td>
                   <td>480</td>
                   <td>60000</td>
                   <td>4000</td>
                   <td>4000</td>
                   <td>40000</td>
                   <td> <span>View </span><span>Edit</span></td>
               </tr>

              


      
              

               
              
           </tbody>
       </table>
   </div>
</div>
  )
}

export default EmployeePayroll