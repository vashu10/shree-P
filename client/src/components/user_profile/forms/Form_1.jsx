import React, { useState } from 'react'

import "../css/form_1.css"


import { useFormik} from 'formik'
import * as Yup from 'yup';







import bride_img from "../Images/gm/Rectangle 141.png"





// for category


const Form_1 = ({ data, setData }) => {


    const signUpSchema = Yup.object({

        businessName: Yup.string().min(2).max(30).required("Please enter your Business Name"),

        number:Yup.number().min(10).required("please enter correct number"),


        email: Yup.string().email().required("Please enter your email"),

        password: Yup.string().min(6).required("Please enter your password"),

        cnfmPassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
      });

    const initialValues = {
        businessName: "",
        number:"",
        email: "",
        password: "",
        cnfmPassword: "",
      };

   const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues,
        validationSchema: signUpSchema,
       
        onSubmit:(values, Action)=>{
            console.log(" Form- 1 values" + values);
            Action.resetForm();
        }
    });

 
   
    
    return (
        <>

            <div className="Form_1">










                {/* coding the main Form part */}



                <div className="personal_form">
                    <div className="personal_form_left">
                        <img src={bride_img} alt="" srcset="" />


                    </div>

                    <div className="personal_form_right">
                        <p className="form_heading">

                            Grow your business with SHRI Photography
                        </p>

                        <p className="form_heading_2nd">
                            Sign In access your Dashboard

                        </p>


                        <form onSubmit={handleSubmit}
                       
                          className='main_personal_form'>

                            <input type="text" placeholder='Business Name' id='username' autoCorrect='off'

                             onChange={(e)=>setData({...data,username:e.target.value})}
                             value={data.username}
                            onBlur={handleBlur}
                            
                            />

                            {touched.businessName && errors.businessName? 
                            (
                                <p className='form-error'>
                                    {errors.businessName}
                                </p>
                            ):null
                            }


                            <input type="number" required placeholder='Phone no' name='number'   autoComplete='off'
                            
                            onChange={(e)=>setData({...data,phoneno:e.target.value})}
                            value={data.phoneno}
  
                            />

                          

                             

                            <input type="email" required autoComplete='off' name='email' placeholder='Email' 
                            onChange={(e)=>setData({...data,email:e.target.value})}
                            value={data.email}
                            
                            />

                          
                        <input type="text" placeholder='City' id='city'
                         onChange={(e)=>setData({...data,city:e.target.value})}
                         value={data.city}/>
                             

                
               

                            <input type="password" required autoComplete='off' name='password'  placeholder='Password'
                               onChange={(e)=>setData({...data,password:e.target.value})}
                               value={data.password}
                         
                            />

                           

                           

                            <input type="password" required autoComplete='off' name='cnfmPassword' placeholder='Confirm Password'
                           
                           onChange={handleChange}
                            values={values.cnfmPassword}
                            
                            />

                            {
                                errors.cnfmPassword && touched.cnfmPassword?(
                                    <p className='form-error'>
                                    {errors.cnfmPassword}

                                    </p>
                                ) :null
                            }

                           




                            {/* category section */}











                           











                          

                            

                            <div className="check_box_part">



                                <input type="checkbox" name="" id="" className='chkbx' /> <span>
                                    Send me email with tips on how to find target that fits the needs <br />
                                </span>

                              

                            </div>

                          



                        </form>
                    </div>
                </div>







            </div>


        </>
    )
}

export default Form_1