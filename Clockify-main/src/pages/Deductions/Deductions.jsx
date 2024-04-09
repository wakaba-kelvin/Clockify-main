import React from 'react'
import '../Deductions/Deductions.scss'
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import CreateDeductions from '../../features/Deductions/CreateDeductions';
import { useGetAllDeductionQuery } from '../../features/Deductions/deductionsApi';
import { PuffLoader } from 'react-spinners';
import EditDeductions from '../../features/Deductions/EditDeductions';

const Deductions = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const[isEditModalDeductionOpen,setEditModalOpen]=useState(false)
    const[selectedDeduction, setSelectedDeduction]=useState('')
    const {data:deductions,isError,isLoading,isFetching}=useGetAllDeductionQuery()

    console.log(`data:${deductions}, isError:${isError},isLaoding:${isLoading} ${isFetching}`)

    const openModal = () => {
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };

      const editModalOpen=(item)=>{

        setEditModalOpen(true)
        setSelectedDeduction(item)
        console.log(selectedDeduction)
        
      }
      const editModalClose=(item)=>{
        setEditModalOpen(false)
      
      }
  
    


  return (
    <div className='deductions-container'>
        <div className="title-bar">
            <span>Deductions</span>
        </div>
        <div className="content-wrapper">
        <div className='search-add-new-btn'>
                <form action="">
                        <input type="search" name="" id="" placeholder='search for an employee' />
                </form>
                <div  className='button-wrapper'>
                        <button className='add-new-btn' onClick={openModal}> Add New</button>
                        {isModalOpen && (
            <Modal onClose={closeModal}>
              <CreateDeductions closeGroup={closeModal} />
            </Modal>
          )}
                </div>
               
            </div>
           {(isLoading)? (<div className="status-loader">
            <div className='status-loader-content'>
               <PuffLoader loading={true} size={150} />
                <p>Please wait .........</p>
             </div>
           </div>): <table>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Deduction Type</th>
                        <th>Amount</th>
            
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {deductions&& deductions.map((item,index)=>(
                         <tr key={index}>
                            <td>{item.deduction_id}</td>
                            <td>{item.firstname} {item.lastname}</td>
                            <td>{item.description}</td>
                            <td>{item.amount}</td>
                            <td>{item.created_on}</td>
                            <td><button onClick={()=>editModalOpen(item)}>Edit</button>
                            {
                              isEditModalDeductionOpen? (<Modal onClose={editModalClose}>
                                  <EditDeductions  onClose={editModalClose}  deduction={selectedDeduction}/>

                              </Modal>):''
                            }
                            
                            
                            
                            
                            </td>
                         </tr>
                    ))}                   
                   
                </tbody>
            </table>}
        </div>
        


    </div>
  )
}

export default Deductions