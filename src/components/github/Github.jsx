import React, { useEffect, useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data , setdata] = useState([])
    // useEffect(() => {
    //  fetch(`https://api.github.com/users/Pratik4555-star`)
    //  .then((response)=> response.json())
    //  .then(data =>{
    //     console.log(data);
    //     setdata(data)
    // })
      
    // }, [])
    
  return (
    <div className='text-center m-4 text-2xl'>
        GitHub Followers: {data.followers}
        
        </div>

  )
}

export default Github

export const infoLoader  = async ()=>{
   const response = await fetch(`https://api.github.com/users/Pratik4555-star`)
    return response.json()
}