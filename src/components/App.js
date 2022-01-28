import React, { useEffect, useState } from "react";
import Artwork from "./Artwork";
import Header from "./Header";
import AddMasterpiece from "./AddMasterpiece";
import ArtworksContainer from "./ArtworksContainer";
import SearchBar from "./SearchBar";


function App() {

const [artworks, setArtworks] = useState ([])
const [filteredArtworks, setFilteredArtworks] = useState([])
const [lovers, setLovers] = useState([])
const [reviews, setReviews] = useState([])

function handleSearch (e) {
  const filteredArtworks = artworks.filter(artwork => {
    return artwork.title.toLowerCase().includes(e.target.value.toLowerCase())
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
useEffect (() => {
  fetch('http://localhost:9292/lovers')
  .then(response => response.json())
  .then(data=> setLovers(data))
},[])

// fetch for reviews
useEffect (() => {
  fetch('http://localhost:9292/reviews')
  .then(response => response.json())
  .then(data=> setReviews(data))
},[])

// create artwork
const postArtwork = (artwork) => {
  fetch('http://localhost:9292/artworks', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(artwork)
  })
  .then(res => res.json())
  .then(newArtwork => {
    setArtworks([newArtwork,...artworks])
  })
}

 // patches artwork
 const patchArt = (artwork) => {
  fetch(`http://localhost:9292/artworks/${artwork.id}`, {
    method: 'PATCH',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...artwork, sale:false})
  })
  .then(res => res.json())
    .then(data => {
      console.log(data)
      setArtworks(artworks.map(artwork => {
        if(artwork.id === data.id){
          return data
        } else {
          return artwork
        }
      }))
      console.log(artwork)
    })
  } 

  //  delete artwork
  const handleDelete = (id) => {
    // fetch (`http://localhost:9292/artworks/${id}`, {
    //   method: 'DELETE',
    // })
    // .then(res => res.json())
    // .then(data => {
    //   setArtworks(artworks.filter(a => a.id !== id))
    // })
    console.log(id)
  }
  
  return (
    <div>
      <Header  />
      <SearchBar handleSearch={handleSearch}/>
      <AddMasterpiece 
      postArtwork={postArtwork} 
      />
      <ArtworksContainer artworks={filteredArtworks} reviews={reviews}
      lovers={lovers} setArtworks={setArtworks}
      />
      {/* {artworks.length > 0 && artworks.map(a => <Artwork setArtworks={setArtworks} artworks={artworks} artwork ={a} patchArt={patchArt} handleDelete={handleDelete} key={`${a.id}${a.title}`}/>)} */}
    </div>
  );
}

export default App;
