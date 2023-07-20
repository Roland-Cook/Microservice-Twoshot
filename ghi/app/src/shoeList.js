function ShoeList(props) {
    if (props.shoes === undefined)  {
      return null
    }
    const styleObject = {
        "fontSize" : "10px",
        "height" : "100px",
        "width" : "50%"
  }

  console.log(props.shoes)
    
  return (
    <>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Shoe Name</th>
              <th>Manufacturer</th>
              <th>Color</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
          {props.shoes.map(shoe => {
            return (
              <>
                <tr>
                  <td>{ shoe.name }</td>
                  <td>{ shoe.manufacturer }</td>
                  <td>{ shoe.color }</td>
                  <td> <img style={styleObject} src={shoe.picture_url} alt={shoe.name}/></td>
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
