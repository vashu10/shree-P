import React from 'react'
import '../css/Vendors_page.css'
import Card_vendor from './Card_vendor';
import imagev from '../images/imagev.jpg'
import { useEffect,useState } from 'react'
import axios from "axios"
import Vendor_list from './Vendor_list';
import Reviews from '../../user_profile/jsx/Reviews';





export const Vendors_page = () => {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        const fetchPosts=async()=>{
          const res= await axios.get("/posts")
          console.log(res)
          setPosts(res.data)
        }
        fetchPosts()
    },[])
  return (
    <>
     <Vendor_list posts={posts}   />


    </>
  )
}
