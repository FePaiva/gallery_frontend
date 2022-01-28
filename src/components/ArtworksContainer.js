import React from "react";
import Artwork from "./Artwork";
import artgaleria from "../assets/art-gallery.jpg";


function ArtworksContainer({artworks, artwork, lovers, reviews, handleDelete, patchArt, setArtworks}) {
  return (
    <div className="artgallery-background" style={{ backgroundImage: `url(${artgaleria})`, backgroundRepeat:"no-repeat", backgroundPosition: "center", backgroundSize: "cover", textAlign: "center" }}> 
    <ul className="cards">
      {/* render a list of <Artworks> */}
      {artworks.map(artwork => <Artwork setArtworks={setArtworks} artworks={artworks} artwork ={artwork} patchArt={patchArt} handleDelete={handleDelete} key={`${artwork.id}${artwork.title}`}/>)}
    </ul>

</div>
  );
}

export default ArtworksContainer;
