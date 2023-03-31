import React, {useState } from 'react'
import DrawerNew from './Drawer-new'
import Navbar from '../avinash-jsx/Navbar'



function Navigation() {

    const [isOpen, setisOpen] = useState(false)

    const [drawer, setdrawer]=useState(false)


    const toggleDrawer=()=>{
        setisOpen(!isOpen);

    }

    const offDrawer = ()=>{
        setisOpen(!setdrawer);
    }

   



  return (
    <>

        {isOpen &&  <DrawerNew isOpen={isOpen} toggleDrawer={toggleDrawer}  /> }

       
        <Navbar toggleDrawer={toggleDrawer} isOpen={isOpen} />

    </>
  )
}

export default Navigation