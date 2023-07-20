import React, { useState, useEffect } from 'react';

function HatList(props) {
    const refresh = () => window.location.reload(true)

    if (props.hats === undefined) {
        return null
    }
    const styleObject = {
        "fontSize" : "10px",
        "height" : "100px",
        "width" : "50%"
    }

    const handleDelete = async (hatID) => {
        const hatUrl = `http://localhost:8090/api/hats/${hatID}/`
        console.log(hatUrl, hatID)
        const fetchConfig = {
            method: "DELETE",
        }
        const response = await fetch(hatUrl, fetchConfig);
        if (response.ok) {
            refresh();
        } else {
            console.error('Failed to delete')
        }
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
                    <th>Delete item?</th>
                </tr>
            </thead>
            <tbody>
                {props.hats.map(hat => {
                    return (
                        <tr>
                            <td key={hat.style_name}>{ hat.style_name }</td>
                            <td key={hat.fabric}>{ hat.fabric }</td>
                            <td key={hat.color}>{ hat.color }</td>
                            <td key={hat.location.closet_name}>{hat.location.closet_name}</td>
                            <td key={hat.picture_url}> <img style={styleObject} src={ hat.picture_url } alt={hat.name}/> </td>
                            <td key={hat.id}>
                                <button className="btn btn-danger" onClick={() => handleDelete(hat.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default HatList