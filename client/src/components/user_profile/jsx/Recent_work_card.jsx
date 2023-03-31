import React from 'react'
import "../css/recent_work.css"



const Recent_work_card = ({imageUrl,title,body}) => {
  return (
    <>

<div className='card-container'>
          <div className="image-container">
            <img src={imageUrl} alt=""/>

          </div>
          <div className="card-title-dev">
             <h4>{title} </h4>
          </div>
          <div className="card-body">
            <p>{body}</p>
        </div>
    </div>
    </>
  )
}

export default Recent_work_card