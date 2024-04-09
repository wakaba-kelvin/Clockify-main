import React from 'react'
import '../CashAdvances/CashAdvances.scss'
import Modal from '../../components/Modal/Modal';
import CreateAdvances from '../../features/CashAdvances/CreateAdvances';
import { useState } from 'react';
import { useGetAllCashAdvanceQuery } from '../../features/CashAdvances/cashAdvancesApi';
import { PuffLoader } from 'react-spinners';
import EditcashAdvances from '../../features/CashAdvances/EditcashAdvances';

const CashAdvances = () => {

    const[isModalOpen, setModalOpen]=useState(false);
    const[isEditCashAdvanceOpen, setEditCashAdvance]=useState(false)
    const[selectedCashAdvance, setSelectedCashAdvance]=useState('')
    const{data:advances,isError,isLoading, isFetching}=useGetAllCashAdvanceQuery()

    console.log(`data:${advances},isError:${isError}, isLoading:${isLoading}`)

    const openModal=()=>{
        setModalOpen(true)
    }

    const closeModal=()=>{
        setModalOpen(false)
    }

    const openEditCashAdvanceModal=(item)=>{
        setEditCashAdvance(true)
        setSelectedCashAdvance(item)
    }
    
    const closeEditCashAdvanceModal=()=>{
        setEditCashAdvance(false)
    }
    
    

    
  return (
    <div className='cash-advances-container'>
         <div className="title-bar">
            <span>Cash Advances</span>
        </div>
        <div className="content-wrapper">
        <div className='search-add-new-btn'>
                <form action="">
                        <input type="search" name="" id="" placeholder='search for an employee' />
                </form>
                <div  className='button-wrapper'>
                        <button className='add-new-btn' onClick={openModal}> Add New</button>
                        {isModalOpen&&(
                            <Modal onClose={closeModal}>
                                 <CreateAdvances/>
                            </Modal>
                        )}
                </div>
               
            </div>

            {(isLoading)? (<div className="status-loader">
            <div className='status-loader-content'>
               <PuffLoader loading={true} size={150} />
                <p>Please wait .........</p>
             </div>
           </div>): 
            <table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    advances&&advances.map((item, index)=>(
                        <tr key={index}>
                        <td>{item.user_id}</td>
                        <td>{item.firstname}  {item.lastname}</td>
                        <td>{item.amount}</td>
                        <td>{item.created_on}</td>
                        <td><button  onClick={()=>openEditCashAdvanceModal(item)}   >Edit </button>
                        {
                            isEditCashAdvanceOpen?
                            (<Modal onClose={closeEditCashAdvanceModal}>
                                
                                  <EditcashAdvances cashadvanceDetails={selectedCashAdvance} onClose={closeEditCashAdvanceModal} />


                            </Modal>) :''
                        }
                        
                        
                        
                        </td>
                        </tr>

                    ))
                 }


                   

                    
                   

                    
                   
                </tbody>
            </table>}
            </div>
    </div>
  )
}

export default CashAdvances