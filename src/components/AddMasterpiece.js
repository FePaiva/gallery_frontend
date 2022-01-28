// import React from "react";
import React, { useState } from "react";

function AddMasterpiece({postArtwork}) {

  const [formData, setFormData] = useState({
    title:'',
    artist:'',
    date: '',
    description:'',
    image_url:'',
    era: ''
  })
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
const handleSubmit = (e) => {
  e.preventDefault()
  postArtwork(formData)
} 

  return (
    <form style={{textAlign: 'center', padding:"10px"}}onSubmit={handleSubmit}>
    <label>
    Title:
    <input type="text" name="title" value={formData.title} onChange={handleChange}/>
    </label>
    <label>
    Artist:
    <input type="text" name="artist" value={formData.artist} onChange={handleChange}/>
    </label>
    <label>
    Date:
    <input type="text" name="date" value={formData.date} onChange={handleChange}/>
    </label>
    <label>
    Description:
    <input type="text" name="description" value={formData.description} onChange={handleChange}/>
    </label>
    <label>
    Image:
    <input type="text" name="image_url" value={formData.image_url} onChange={handleChange}/>
    </label>
    <label>
    Era:
    <input type="text" name="era" value={formData.era} onChange={handleChange}/>
    </label>
    <input id="random-planeteer" type="submit" value="Add Art" /> 
    
</form>
  );
}

export default AddMasterpiece;
