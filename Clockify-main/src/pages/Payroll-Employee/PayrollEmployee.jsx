import React from 'react'
import '../Payroll-Employee/PayrollEmployee.scss'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useGetPayRollRecordsforAUserQuery } from '../../features/Payroll/payrollApi'


const PayrollEmployee = () => {
 const [userDetails, setUserDetails]=useLocalStorage('user')
 const {data:payrollEmployeeData, isFetching, isLoading}=useGetPayRollRecordsforAUserQuery(userDetails.user_id)
 console.log(userDetails)




 console.log(`data:${payrollEmployeeData}, isFetching:${isFetching}`)


const dateofBirth= new Date(userDetails.date_of_birth)

const formattedDOB={
    date:dateofBirth.getUTCDate(),
    month:dateofBirth.getUTCMonth(),
    year:dateofBirth.getUTCFullYear()

}

const datefullYear=new Date()

// console.log(formattedDOB)





  return (
    <div class="payroll-container" >
<table >
<tr className='title-bar'>
    <th className='title'>Clockify | Payroll   </th>
    <td className='time'>{`${datefullYear.getUTCFullYear()}/${datefullYear.getUTCMonth()+1}/${datefullYear.getDate()}`}</td>
</tr>
<tr>
    <th>Identification Number</th>
    <td>{userDetails.identification_number}</td>
    <th>Name</th>
    <td>{userDetails.firstname} {userDetails.lastname}</td>
</tr>
<tr>
    <th>Employee Number</th>
    <td>{userDetails.user_id}</td>
    <th>Bank A/c No.</th>
    <td>0x2x6x25x6</td>
    
</tr>

<tr>
    <th>Date of Birth</th>
    <td>{formattedDOB.date}/{formattedDOB.month}/{formattedDOB.year}</td>
    <th>Payroll Number</th>
    <td></td>
</tr>



<tr>
    <th>Address</th>
    <td>Nyeri, Kenya</td>
    <th>Schedule</th>
    <td>Morning Shitft</td>
</tr>

<tr>
    <th>Position </th>
    <td>{userDetails.position_description}</td>  
    
</tr>
</table>
<tr></tr>
<br/>
<table >
<tr>
    <th >Earnings</th>
    <th>Amount</th>
    <th >Deductions</th>
    <th>Amount</th>
</tr>
<tr>
    <td>Gross Salary</td>
    <td>{payrollEmployeeData?payrollEmployeeData[0].gross_salary:'-'}</td>
    <td>NSSF</td>
    <td>-</td>
</tr>
<tr>
    <td>Overtime</td>
    <td>{payrollEmployeeData?payrollEmployeeData[0].total_overtime:'-'}</td>
    <td>Income tax</td>
    <td>-</td>
</tr>
<tr>
    <td>special Allowance</td>
    <td>-</td>
    <td>Cash Advance</td>
    <td>{payrollEmployeeData?payrollEmployeeData[0].total_cash_advances:'-'}</td>
</tr>

<tr>
    <th>Gross Earnings</th>
    <td>Ksh:{payrollEmployeeData?payrollEmployeeData[0].gross_salary + payrollEmployeeData[0].total_overtime:'-'}</td>
    <th >Gross Deductions</th>
    <td>Ksh.{payrollEmployeeData?payrollEmployeeData[0].total_deductions:'-'}</td>
</tr>
<tr>
        <td></td>
        <td><strong>NET PAY</strong></td>
        <td>{payrollEmployeeData?payrollEmployeeData[0].net_pay:'-'}</td>
        <td></td>
</tr>
</table>
    </div>
  )
}

export default PayrollEmployee