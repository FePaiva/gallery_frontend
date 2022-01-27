import React, { useEffect, useState } from "react";
// import Artwork from "./Artwork";
import Header from "./Header";
import AddMasterpiece from "./AddMasterpiece";
import ArtworksContainer from "./ArtworksContainer";
import SearchBar from "./SearchBar";

function App() {

const [artworks, setArtworks] = useState ([])
const [filteredArtworks, setFilteredArtworks] = useState(artworks)
// const [lovers, setLovers] = useState([])
// const [reviews, setReviews] = useState([])


function handleSearch (e) {
  const filteredArtworks = artworks.filter(artwork => {
    return artwork.title.toLowerCase().includes(e.target.value.toLowerCase()) || artwork.description.toLowerCase().includes(e.target.value.toLowerCase())
  })
  setFilteredArtworks(filteredArtworks)
}

useEffect (() => {
  setFilteredArtworks(artworks)
}, [artworks])

//  fetch for artworks
useEffect (() => {
  fetch('http://localhost:9292/artworks')
  .then(response => response.json())
  .then(data=> setArtworks(data))
},[])

// fetch for lovers
// useEffect (() => {
//   fetch('http://localhost:9292/lovers')
//   .then(response => response.json())
//   .then(data=> setLovers(data))
// },[])

// fetch for reviews
// useEffect (() => {
//   fetch('http://localhost:9292/reviews')
//   .then(response => response.json())
//   .then(data=> setReviews(data))
// },[])

// create artworks for
// const postArtwork = (artwork) => {
//   fetch('http://localhost:9292/artworks', {
//     method: 'POST',
//     headers:{
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(artwork)
//   })
//   .then(res => res.jspn())
//   .then(newArtwork => {
//     setArtworks([newArtwork,...artworks])
//   })
// }

  return (
    <div>
      <Header  />
      <SearchBar handleSearch={handleSearch}/>
      <AddMasterpiece 
      // postArtwork={postArtwork} 
      />
      <ArtworksContainer artworks={filteredArtworks} 
      // lovers={lovers} 
      />
    </div>
  );
}

export default App;
