import React,{useState} from 'react'
import "../css/form_1.css"
import axios from 'axios'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import imggg from "../Images/gm/66f-1.jpg"
import createPost from "../pages/Form"
const Form_4 = () => {
  const [file, setFile] = useState(null);
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>

        <div className="Form_1">
           
        

        {/* coding the mid part */}



        



        {/* coding the main Form part */}
        <form action="#" className='main_personal_form'>
        <div className="circular_image" >
        <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button  onClick={handleClick}>Publish</button>
          </div>
          <div className='arrow'>
        <EastOutlinedIcon className="arrow" style={{fontSize:"85px"}}/>
        {/* <img src={imggg} className="profo" /> */}
        </div>
        {file && (
        <img src={URL.createObjectURL(file)} className="profo" />)}
        </div>
        
        <p className='set-y'>Set Your Profile Picture</p>
        <hr/>
         
        <label className="rounded-sqimg">
        
        <AddPhotoAlternateOutlinedIcon style={{fontSize:"140px"}}/>
        <input type="file" className="hidden"/>
        </label>
        <p className='set-i'>Put your images you want to showcase</p>
        <hr/>
        <div className="rounded-sqvid">
        <VideoCallOutlinedIcon style={{fontSize:"160px"}}/>
        
        </div>
        <p className='set-v'>Put your videos you want to showcase</p>

     

       </form>
        </div>







        


    </>
  )
}

export default Form_4;