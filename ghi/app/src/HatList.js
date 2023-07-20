function HatList(props) {
    if (props.hats === undefined) {
        return null
    }
    const styleObject = {
        "fontSize" : "10px",
        "height" : "100px",
        "width" : "50%"
    }
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Style</th>
                    <th>Fabric</th>
                    <th>Color</th>
                    <th>Location</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {props.hats.map(hat => {
                    return (
                        <tr>
                            <td>{ hat.style_name }</td>
                            <td>{ hat.fabric }</td>
                            <td>{ hat.color }</td>
                            <td>Location Pending</td>
                            <td> <img style={styleObject} src={ hat.picture_url } alt={hat.name}/> </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default HatList