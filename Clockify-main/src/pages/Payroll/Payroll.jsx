import React from 'react'
import '../Payroll/Payroll.scss'
import { useGetPayRollRecordsQuery } from '../../features/Payroll/payrollApi'
import { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import { PuffLoader } from 'react-spinners'

const Payroll = () => {


    const {data:payRecords,isLoading,isFetching}=useGetPayRollRecordsQuery()

    console.log(`data:${payRecords},isLoading:${isLoading}, isFetching:${isFetching}`)

    const payrollRef=useRef();

    const handlePrint=()=>{
        window.print()
    }
   






 

  return (
    <div className='payroll-container' ref={payrollRef}>
         <div className='title-bar'>
            <span>Payroll </span>
        </div>

        <div className='content-wrapper'>
        <div className='search-add-new-btn'>
                
                <div  className='button-wrapper'>
                        <button className='add-new-btn' onClick={handlePrint}> Export to PDF </button>
                        <div ref={payrollRef}></div>
                     <ReactToPrint
                           trigger={() => <button>Print</button>}
                             content={() => payrollRef.current}
                      />
                    </div>
               
            </div>
            {(isLoading)? (<div className="status-loader">
            <div className='status-loader-content'>
               <PuffLoader loading={true} size={150} />
                <p>Please wait .........</p>
             </div>
           </div>):  <table>
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
                    {payRecords&&payRecords.map((payRecord,index)=>(
                     <tr key={index}>
                          <td>{payRecord.payroll_id}</td>
                          <td>{payRecord.firstname} {payRecord.lastname}</td>
                          <td>8/200</td>
                          <td>{payRecord.total_overtime}</td>
                          <td>{payRecord.gross_salary}</td>
                          <td>{payRecord.total_deductions}</td>
                          <td>{payRecord.total_cash_advances}</td>
                          <td>{payRecord.net_pay}</td>
                          <td> <span>View </span><span>Edit</span></td>
                      </tr>
                        

                    ))}
                </tbody>
            </table>}
        </div>
    </div>
  )
}

export default Payroll