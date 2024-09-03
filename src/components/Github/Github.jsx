import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/thedevelopersDeveloper")
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div>
      <h1>Github followers:{data.followers}</h1>
      <h1>Name:{data.name}</h1>
      <img src={data.avatar_url} alt="photo"/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
    const response = await fetch("https://api.github.com/users/thedevelopersDeveloper")
    return response.json()
}