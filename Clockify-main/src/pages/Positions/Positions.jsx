import React from 'react'
import '../Positions/Positions.scss'
import { useState } from 'react';
import CreatePosition from '../../features/Position/CreatePosition';
import Modal from '../../components/Modal/Modal';
import { useGetAllPositionsQuery } from '../../features/Position/positionApi';
import EditPosition from '../../features/Position/EditPosition';
import { PuffLoader } from 'react-spinners';

const Positions = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen]=useState(false)
    const [selectedPosition, setSelectedPosition]=useState('')
    const {data:positions,isError,isLoading, isFetching }=useGetAllPositionsQuery();

    console.log(`data:${positions}, error:${isError},isLoading:${isLoading}`)
    

    const openModal = () => {
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };


      const openEditModal = (item) => {
        setSelectedPosition(item)
        setEditModalOpen(true)
      };
    
      const closeEditModal = () => {
       
        setEditModalOpen(false)
      };


    const handleView=()=>{
        alert("hey I am open ")
    }



  return (
    <div className='positions-container'>
          <div className='title-bar'>
            <span>Positions  </span>
        </div>
        <div className='content-wrapper'>
        <div className='search-add-new-btn'>
                <form action="">
                        <input type="search" name="" id="" placeholder='search for an position' />
                </form>
                <div  className='button-wrapper'>
                        <button className='add-new-btn' onClick={openModal}> Add New</button>
                                  {isModalOpen && (
                      <Modal onClose={closeModal}>
                        <CreatePosition closeGroup={closeModal} />
                      </Modal>
                    )}
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
                        <th>Description</th>
                        <th>Rate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {positions&&positions.map((item,index)=>(
                        
                        <tr key={index}>
                            <td>{item.position_description}</td>
                            <td>{item.gross_salary}</td>
                            <td> <button onClick={()=>{openEditModal(item);}}>Edit</button>
                            {
                                isEditModalOpen? (
                                    <Modal onClose={closeEditModal}>
                                      <EditPosition closeGroup={closeEditModal} position={selectedPosition} />
                                    </Modal> 
                                  ):''
                                
                            }
                            
                            </td>

                        </tr>


                    ))}
                   
                {!positions&&(<PuffLoader/>)}
                    
                   
                </tbody>
            </table>}

        </div>









    </div>
  )
}

export default Positions