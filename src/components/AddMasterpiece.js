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
    <form onSubmit={handleSubmit}>
    <label>
    Title:
    <input type="text" name="name" value={formData.title} onChange={handleChange}/>
    </label>
    <label>
    Artist:
    <input type="text" name="species" value={formData.artist} onChange={handleChange}/>
    </label>
    <label>
    Date:
    <input type="number" name="age" value={formData.date} onChange={handleChange}/>
    </label>
    <label>
    Description:
    <input type="text" name="owner" value={formData.description} onChange={handleChange}/>
    </label>
    <label>
    Image:
    <input type="text" name="phone" value={formData.image_url} onChange={handleChange}/>
    </label>
    <label>
    Image:
    <input type="text" name="phone" value={formData.image_url} onChange={handleChange}/>
    </label>
    <input type="submit" value="Submit" />
</form>
  );
}

export default AddMasterpiece;
