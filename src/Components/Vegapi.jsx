import React, { useEffect, useState } from 'react'

const Vegapi = () => {
    const [data,setData]=useState([])
    useEffect(() => {
      fetch('https://65912fbd8cbbf8afa96bf371.mockapi.io/vegetables')
    .then((veg)=>veg.json())
    .then((res2=>{
        console.log(res2);
        setData(res2)
    }))
},[])
    
    
  return (
    <div>
        {data.map((item)=>(
            <div>
                {item.veg_name}
                {item.veg_description}
                <img src={item.veg_image} alt="" />
                {item.veg_price}
            </div>
        )
        )}
    </div>
  )
}
export default Vegapi