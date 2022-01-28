import React from "react";
import Artwork from "./Artwork";
import artgaleria from "../assets/art-gallery.jpg";


function ArtworksContainer({artworks, lovers, reviews}) {
  return (
    <div className="artgallery-background" style={{ backgroundImage: `url(${artgaleria})`, backgroundRepeat:"no-repeat", backgroundPosition: "center", backgroundSize: "cover", textAlign: "center" }}> 
    <ul className="cards">
      {/* render a list of <Artworks> */}
      {artworks.map(artwork => <Artwork artwork={artwork} key={`${artwork.id}${artwork.name}`} reviews={reviews} lovers={lovers}/>)}
    </ul>

</div>
  );
}

export default ArtworksContainer;
