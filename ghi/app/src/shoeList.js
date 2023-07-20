function ShoeList(props) {

  const refresh = () => window.location.reload(true)

    if (props.shoes === undefined)  {
      return null
    }
    const styleObject = {
        "fontSize" : "10px",
        "height" : "100px",
        "width" : "50%"
  }

 


  const handleDelete = async (id) => {

    const shoeUrl = `http://localhost:8080/api/shoes/${id}/`;
    const fetchConfig = {
      method: "DELETE",
    };
    const response = await fetch(shoeUrl, fetchConfig);
    if (response.ok) {
      refresh()
      
    }
    else {
      console.error("Failed to delete")
    }
    const data = await response.json();
    console.log(data)


  }


  return (
    <>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Shoe Name</th>
              <th>Manufacturer</th>
              <th>Color</th>
              <th>Image</th>
              <th>Bin</th>
            </tr>
          </thead>
          <tbody>
          {props.shoes.map(shoe => {
            return (
              <>
                <tr>
                  <td key={shoe.name}>{ shoe.name }</td>
                  <td key ={shoe.manufacturer} >{ shoe.manufacturer }</td>
                  <td key ={shoe.color} >{ shoe.color }</td>
                  <td key ={shoe.picture_url} > <img style={styleObject} src={shoe.picture_url} alt={shoe.name}/></td>
                  <td key ={shoe.bin.closet_name} >{shoe.bin.closet_name}</td>
                  <td > <button type="submit" onClick={() => {handleDelete(shoe.id)}}>DELETE</button> </td>
                </tr>

              </>
              );
  })}
          </tbody>
        </table>
        </>
  )
  }
  
  export default ShoeList
