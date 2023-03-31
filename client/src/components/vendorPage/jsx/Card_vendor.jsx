import React from 'react'

import { HiLocationMarker } from 'react-icons/hi'

const Card_vendor = ({ imgsrc, vname, location, price, ppd }) => {
  return (
    <>

<div className="cards__devi">
                <div className="card__devi">
                    <img
                        src={imgsrc}
                        alt="vendor pic"
                        className="card__img"
                    />
                    <div className="card__info">
                        <p className="card__vendorname">{vname}</p>
                        <p className="card__location"> <HiLocationMarker className="location__icon" /> {location}</p>
                        <p className="card__price">Rs. {price} onwards</p>
                        <p className="card__priceperday">price/day : {ppd}</p>
                    </div>
                </div>
            </div>


    </>
  )
}

export default Card_vendor