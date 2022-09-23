import React from 'react'
import './Loader.css'

const Loader = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-item-center' style={{ marginTop: "17%" }}>
                <div className="lds-dual-ring" />
            </div>
        </>
    )
}

export default Loader