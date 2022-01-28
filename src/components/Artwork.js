import React, { useState } from "react";

function Artwork({artwork, reviews, patchArt, handleDelete}) {
  console.log(artwork)
  const [description, setDescription] = useState(true)

  function handleClick(){
    setDescription(!description)
  }
  // filter the reviews by the artwork id.
  

  // const loverReview = reviews.map(review => review.review)


  return (
    <li className="cards__item">
      <div className="card">
        <img style={{cursor:"pointer"}} onClick={handleClick}
          src={artwork.image_url}
          alt={artwork.title}
          className="card__image"
        />
        <div className="card__content">
          <div style={{backgroundColor: 'transparent'}} className="card__title">{artwork.title}</div>
          <p className="card__text">{description ? artwork.description : reviews.map(review => review.review)}</p>
          
          <div className="card__detail">
          {artwork.sale? <button style={{cursor:"pointer"}} onClick={()=> patchArt(artwork)}>Sell Art</button> : <p>Sold</p>}
          <button style={{cursor:"pointer"}} onClick={() => handleDelete(artwork.id)}>Remove</button>
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
