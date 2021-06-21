import React from 'react'

const Bands = (props) => {

    const band = props.bands.map((band, index)=> <Band key={index} band={band}/>)

    render (
        <div>
            {band}
        </div>
    )
}