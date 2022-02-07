import React from 'react';

const houseshow=(house)=>{
    return (
        <>
            <div className='card' style={{width:"70vh"}}>
                <img className="card-img-top" src={house.house.img}/>
                <div className='card-body' style={{fontSize:"4vh"}}>
                    <ul>
                        <li>Address: {house.house.address}</li>
                        <li>City: {house.house.city}</li>
                        <li>Rent: {house.house.rent}</li>
                        <li>Type: {house.house.type}</li>
                        <li>Owner's Mobile: {house.house.mobile}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default houseshow;