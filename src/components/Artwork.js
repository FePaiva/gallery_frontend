import React, { useState } from "react";

function Artwork ({artwork}) {
  // console.log(artwork)
  const [description, setDescription] = useState(true)

  function handleClick(){
    setDescription(!description)
  }
  
  // const loverReview = reviews.map(review => review.review)

  return (
    <li className="cards__item">
      <div className="card">
        <img onClick={handleClick}
          src={artwork.image_url}
          alt={artwork.title}
          className="card__image"
        />
        <div className="card__content">
          <div style={{backgroundColor: 'transparent'}} className="card__title">{artwork.title}</div>
          <p className="card__text">{description ? artwork.description : artwork.date}</p>
          
          <div className="card__detail">
            {/* <p>{artwork.era}</p> */}
            <p >
              {
               "INSTAPAULO ART GALLERY"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Artwork;
