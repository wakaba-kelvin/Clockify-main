import React from 'react'
import '../MainContent/MainContent.scss'
import SideNavbarAdmin from '../SideNavbarAdmin/SideNavbarAdmin'
import Content from '../Content/Content'


const MainContent = () => {
  return (
    <div className='maincontent-container'>
        <SideNavbarAdmin/>
        <Content/>
    </div>
  )
}


export default MainContent