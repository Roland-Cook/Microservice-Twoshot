function ShoeList(props) {
    if (props.shoes === undefined)  {
      return null
    }
    const styleObject = {
        "fontSize" : "10px",
        "height" : "100px",
        "width" : "50%"
  }


console.log(props.shoes[0].bin)
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
                  <td>{ shoe.name }</td>
                  <td key ={shoe.manufacturer} >{ shoe.manufacturer }</td>
                  <td key ={shoe.color} >{ shoe.color }</td>
                  <td key ={shoe.picture_url} > <img style={styleObject} src={shoe.picture_url} alt={shoe.name}/></td>
                  <td key ={shoe.bin.closet_name} >{shoe.bin.closet_name}</td>
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
