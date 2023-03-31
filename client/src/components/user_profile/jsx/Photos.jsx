import { ImageList, ImageListItem } from '@mui/material';
import React, { useState } from 'react'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import ClearIcon from '@mui/icons-material/Clear';


 const images = [
    
    "https://picsum.photos/200/300?image=1050",
    //...
    "https://picsum.photos/300/300?image=206",

    "https://picsum.photos/200/300?image=1050",
    //...
    "https://picsum.photos/300/300?image=206",

    "https://picsum.photos/200/300?image=1050",
    //...
    "https://picsum.photos/300/300?image=206",

    "https://picsum.photos/200/300?image=1050",
    //...
    "https://picsum.photos/300/300?image=206",

]




    









const Photos = () => {

    const [Data, setData] = useState({img: '',i: 0})


    
const viewImage=(img,i)=>{

        setData({img,i});
    console.log(Data);

}

const imgAction=(action)=>{

    let i=Data.i;
    if (action==="next-img") {

        setData({img: images[i+1], i: i+1});
        console.log(Data);
        console.log("next");
        

        
    }
    else if (action==="prev-img") {

        setData({img: images[i-1], i: i-1});
        console.log(Data);
        console.log("prev");
        

        
    }else if (action==="close") {

        setData({img: "", i: 0});
        console.log(Data);
        console.log("next");
        

        
    }

}
  return (
    <>

    {
        Data.img && <div style={{

            width:'100%',
            height:'100vh',
            background:'black',
            position:'fixed',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            overflow:'hidden'

        }}>

        <button 
         style={{marginRight:'1rem', width:'40px',fontSize:'30px'}}
        onClick={()=>imgAction('prev-img')}>
            <ChevronLeftIcon    />
        </button>
        <img src={Data.img} 
        
        style={{
            width:'auto',
            maxWidth:'100%',
            maxHeight:'100%'
        }}
         />

         <button
         style={{marginLeft:'1rem', width:'40px',fontSize:'30px'}}
          onClick={()=>imgAction('next-img')}>
        < NavigateNextIcon  />
         </button>

         <button onClick={() =>imgAction('close')}
         style={{position:'absolute',top:'20px',right:'50px',width:'50px', height:'40px',fontSize:'1.2rem'}}
         >
         <ClearIcon />
         </button>



        </div>
    }


<ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1000:4}}

                
            >
                <Masonry gutter='15px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", cursor:'pointer', display: "block"}}

                            onClick={()=>viewImage(image,i)}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>

 








    </>
  )
}




const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      cols: 2,
    },
  ];

export default Photos