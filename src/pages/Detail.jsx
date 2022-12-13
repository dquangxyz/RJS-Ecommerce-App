import React from 'react'
import { useParams } from 'react-router-dom';


const Detail = () => {
    const { id } = useParams()


    return (
        <div>
            <div>Detail</div>
            <div>{id}</div>
        </div>
    )
}

export default Detail