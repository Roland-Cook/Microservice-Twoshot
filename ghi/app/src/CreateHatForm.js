import { useState, useEffect } from "react";

function CreateHatForm(){
    const [styleName, setStyleName] = useState("");
    const [fabric, setFabric] = useState("");
    const [color, setColor] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [location, setLocation] = useState('');
    const [locations, setLocations] = useState([])

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/locations/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setLocations(data.locations)
            console.log(data, setLocations)
        } else {
            console.error('Error retrieving location data')
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleStyleChange = (event) => {
        setStyleName(event.target.value)
    }

    const handleFabricChange = (event) => {
        setFabric(event.target.value)
    }

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    const handlePictureChange = (event) => {
        setPictureUrl(event.target.value)
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.styleName = styleName;
        data.fabric = fabric;
        data.color = color;
        data.pictureUrl = pictureUrl;
        data.location = location;

        const hatUrl = 'http://localhost:8090/api/hats/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(hatUrl, fetchConfig);
        if (response.ok) {
            const newHat = response.json();
            setStyleName('');
            setFabric('');
            setColor('');
            setPictureUrl('');
            setLocation('')
        } else {
            console.error('Error sending form')
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit} id="create-hat-form">
                <h1 className="card-title">Create a hat.</h1>
                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handleStyleChange} placeholder="Hat Style" type="text" id="hat_style" name="hat_style" className="form-control" />
                    <label htmlFor="hat_style">Hat Style</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handleFabricChange} placeholder="example Wool" type="text" id="fabric" name="fabric" className="form-control" />
                    <label htmlFor="fabric">Fabric</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handleColorChange} placeholder="Color" type="text" id="color" name="color" className="form-control" />
                    <label htmlFor="color">Color</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating mb-3">
                    <input required onChange={handlePictureChange} placeholder="Color" type="url" id="picture_url" name="picture_url" className="form-control" />
                    <label htmlFor="picture_url">Picture URL</label>
                    </div>
                </div>
                <div className="mb-3">
                    <select onChange={handleLocationChange} name="location" id="location" className="form-select" required>
                        <option value="">What closet?</option>
                        {locations.map(location=>{
                        return(
                            <option value={location.id} key={location.id}>{location.closet_name}</option>
                        )
                        })
                        }
                    </select>
                </div>
            </form>
        </div>
    )

}

export default CreateHatForm;