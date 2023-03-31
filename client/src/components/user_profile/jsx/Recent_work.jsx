import React from 'react'
import "../css/recent_work.css"
import Recent_work_card from './Recent_work_card'

import img1 from "../Images/gm/Rectangle 122.png"
import img2 from "../Images/gm/Rectangle 122.png"
import img3 from "../Images/gm/Rectangle 122.png"

export const Recent_work = () => {
    return (
        <>

            <div className="heading-recent-works">
                <h1 className="heading-h1-recent">
                    Recent Works
                </h1>
            </div>

            <div className="main-container">
        <div className="card-1 recent-card">
          <Recent_work_card
            title="Make the duppatta on the head way more comfortable
      with hair extension clips."
            imageUrl={img1}
            body="She communicates well,provides good suggestions,and is very quick in delivering quality work.It was a  pleasure working with her."
          />
        </div>
        <div className="card-2 recent-card">
          <Recent_work_card
            title="Make the duppatta on the head way more comfortable
      with hair extension clips."
            imageUrl={img2}
            body="She communicates well,provides good suggestions,and is very quick in delivering quality work.It was a  pleasure working with her."
          />
        </div>
        <div className="card-3 recent-card">
          <Recent_work_card
            title="Make the duppatta on the head way more comfortable
      with hair extension clips."
            imageUrl={img3}
            body="She communicates well,provides good suggestions,and is very quick in delivering quality work.It was a  pleasure working with her."
          />
        </div>
      </div>



        </>
    )
}
