import React from 'react'
import axios from 'axios'
import Form_1 from '../forms/Form_1';
import Form_2 from '../forms/Form_2';
import Form_3 from '../forms/Form_3';
import Form_4 from '../forms/Form_4';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import "../css/form_1.css"
import { useContext,useState } from "react"
import {Context} from '../../../context/Context'
const Form = () => {

    const [page, setPage] = useState(0);
    const { user } = useContext(Context);
     const [file,setFile]=useState({
     })
    const [data,setData]=useState({
        username:'',
        phoneno:'',
        email:'',
        city:'',
        password:'',
        category:'',
        sub_cat1: '',
        sub_cat2:'',
        sub_cat3: '',
        desc: '',
        basic_price: '',
        basic_time: '',
        standard_price: '',
        standard_time: '',
        pre_price: '',
        pre_time: '',
        gig_title:'',
        gig_desc:'',
       
        // username: user.username,

    })
   
     const createPost= async (e)=>{
      const {username,phoneno,email,city,password,category,sub_cat1,sub_cat2,sub_cat3,desc,basic_price,basic_time,standard_price,standard_time,pre_price,pre_time,gig_title,gig_desc,photo}=data
      e.preventDefault();
      if (file) {
        const data =new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        createPost.photo = filename;
        try {
          await axios.post("/upload", data);
        } catch (err) {}
      }
      try{
        const res= await axios.post('/posts/',{
          username,
          phoneno,
          email,
          city,
          password,
          category,
          sub_cat1,
          sub_cat2,
          sub_cat3,
          desc,
          basic_price,
          basic_time,
          standard_price,
          standard_time,
          pre_price,
          pre_time,
          gig_title,
          gig_desc,
          photo, 
        })
        window.location.replace("/post/" + res.data._id)
        alert("registration successful");
      }
     catch (error) {
          alert('Registration failed')
          console.log(error.response.data)
        }


     }
    const steps = [
        'Personal Information ',
        'Professional Information ',
        'Profile Information ',
        
      ];
      const FormTitle=[
              "Personal Information ","Professional Information", "Profile Information"]           
      const PageDisplay=()=>{
        if(page==0){
            return <Form_1 data={data} setData={setData} />
        }
        else if(page==1){
          return <Form_2 data={data} setData={setData}/>

      }
      else{
        return <Form_3 data={data} setData={setData}/>

      }
    
      }
  return (
    <>    <div className="Form_1_upper_part">
                






                <Box sx={{ width: '100%' }} my={4}>
      <Stepper activeStep={page} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel style={{fontSize: "22px"}} >{label  }</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>







            </div>






            <div className="Form_1_mid">
            <p className="mid_p">
                {FormTitle[page]}
            </p>

            <p className="mid_desc">
                Tell us about yourself we'll provide you a platform where you can shine and show your skills
            </p>
        </div>
        <div>{PageDisplay()}
        </div>
        <div className="changing_btns">

                    
        <button disabled={page == 0} onClick={()=>{setPage((currPage)=>currPage-1)}} className='Submit_form_button '>Previous</button><button/>

        <button type="submit"   onClick={(e) => {
              if (page === FormTitle.length - 1){
                alert('Form Submitted')
                createPost(e)
              console.log(data)
              
              } else {
                setPage((currPage) => currPage + 1)
              }
           }} className='Submit_form_button continue ' >
            {page === FormTitle.length-1 ? "Submit" : "Next"}
           </button>

        </div>

        </>


  )
}

export default Form