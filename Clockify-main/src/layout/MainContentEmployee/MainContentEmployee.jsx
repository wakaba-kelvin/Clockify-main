import React from 'react'
import '../MainContentEmployee/MainContentEmployee.scss'
import SideNavbarEmployee from '../SideNavbarEmployee/SideNavbarEmployee'
import ContentEmployee from '../ContentEmployee/ContentEmployee'

const MainContentEmployee = () => {
  return (
    <div className='maincontent-container'>
        <SideNavbarEmployee/>
        <ContentEmployee/>
   </div>
    
  )
}

export default MainContentEmployee