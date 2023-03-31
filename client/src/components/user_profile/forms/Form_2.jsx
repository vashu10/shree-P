import React from 'react'
import "../css/form_1.css"
import { useForm } from 'react-hook-form';
import bride_img from "../Images/gm/Rectangle 141.png"

const Form_2 = ({data,setData}) => {
    
  return (
    <>

        <div className="Form_1">
           
        

        {/* coding the mid part */}



        



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
                   Category Photography

                </p>


                <form action="#" className='main_personal_form'  >
                      
                <input type="text" placeholder='Categories' id='category'
                    onChange={(e)=>setData({...data,category:e.target.value})}
                    value={data.category}/>

                    <input type="text" placeholder='Sub-Categories-1' id='sub_cat1'
                    onChange={(e)=>setData({...data,sub_cat1:e.target.value})}
                    value={data.sub_cat1}/>

                    <input type="text" placeholder='Sub-Categories-2' id='sub_cat2'        onChange={(e)=>setData({...data,sub_cat2:e.target.value})}    autoComplete="off" value={data.sub_cat2}/>
                    
                    <input type="text" placeholder='Sub-Categories-3' id='sub_cat3'           onChange={(e)=>setData({...data,sub_cat3:e.target.value})} autoComplete="off" value={data.sub_cat3}/>

                    <textarea  id="desc" cols="30" rows="5" placeholder='Enter Your Business Address'       onChange={(e)=>setData({...data,desc:e.target.value})}     autoComplete="off" value={data.desc}></textarea>

                   
                   

                    <div className="check_box_part">

                    

                    </div>

                    {/* <div className="changing_btns">

                    


                    <input type="submit" className='Submit_form_button continue' />

                    </div> */}




                </form>
            </div>
        </div>







        </div>


    </>
  )
}

export default Form_2