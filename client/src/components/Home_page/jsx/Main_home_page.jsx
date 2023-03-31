import React from 'react'
import HomePage from './HomePage'
import Sumup from './Sumup'
import { useEffect,useState } from 'react'
import axios from "axios"
import { Vendors_page } from '../../vendorPage/jsx/Vendors_page'
import { useLocation } from 'react-router'

const Main_home_page = () => {
  const [posts,setPosts]=useState([])
   const {search}=useLocation()
  useEffect(()=>{
      const fetchPosts=async()=>{
        const res= await axios.get("/posts"+search)
        console.log(res)
        setPosts(res.data)
      }
      fetchPosts()
  },[search])
  return (
    <>

    <HomePage posts={posts}  />
    
    <Sumup  />


    </>
  )
}

export default Main_home_page