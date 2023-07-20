import React, {useState, useEffect} from "react";


function CreateShoeForm (props) {

const [name, setName] = useState('');
const [manufacturer, setManufacturer] = useState('');
const [color,setColor] = useState('')
const [picture_url,setPicture] = useState('')
const [bin,setBin] = useState('')
const [bins, setBins] = useState([]);

const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  }

  const handleManufacturerChange = (event) => {
    const value = event.target.value;
    setManufacturer(value);
  }

  const handleColorChange = (event) => {
    const value = event.target.value;
    setColor(value);
  }

  const handlePictureChange = (event) => {
    const value = event.target.value;
    setPicture(value);
  }

  const handleBinChange = (event) => {
    const value = event.target.value;
    setBin(value);
  }


const handleSubmit = async (event) => {
    event.preventDefault();
  
    // create an empty JSON object
    const data = {};
    data.name = name;
    data.manufacturer = manufacturer
    data.color = color
    data.picture_url = picture_url
    data.bin = bin

    const shoeUrl = `http://localhost:8080/api/shoes/`;
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(data)

    const response = await fetch(shoeUrl, fetchConfig);
    console.log(response)

    if (response.ok) {

      setName('');
      setColor('')
      setManufacturer('')
      setBin('')
      setPicture('')
    }
  }


const fetchData = async () => {
    const url = 'http://localhost:8100/api/bins/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data)
      setBins(data.bins)
      
    }
  }

  useEffect(() => {
    fetchData();
  }, []);




return (
    <div className="row">
    <div className="offset-3 col-6">
      <div className="shadow p-4 mt-4">
        <h1>Create a shoe</h1>
        <form onSubmit={handleSubmit} id="create-location-form">
          <div className="form-floating mb-3">
            <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name={name} id="name" className="form-control"/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleManufacturerChange} value={manufacturer} placeholder="manufacturer" name={manufacturer} id="manufacturer" className="form-control"/>
            <label htmlFor="manufacturer">Manufacturer</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleColorChange} value={color} placeholder="color" required type="text" name={color} id="color" className="form-control"/>
            <label htmlFor="color">Color</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handlePictureChange} value={picture_url} placeholder="Picture" required type="text" name={picture_url} id="picture_url" className="form-control"/>
            <label htmlFor="picture_url">Picture URL</label>
          </div>
          <div className="mb-3">
            <select onChange={handleBinChange} name={bin} value={bin} id="state" className="form-select">
            <option >Choose a bin</option>
                {bins.map(bin => {
                  return (
                    <option key={bin.href} value={bin.href}>
                      {bin.closet_name}
                    </option>
                  );
                })}
                </select>
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  </div>
);
};

export default CreateShoeForm
