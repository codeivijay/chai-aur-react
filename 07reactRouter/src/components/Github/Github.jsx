import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    /* const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, []) */
  const data =  useLoaderData()
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
      Github Followers: This is Status Code {data.statusCode}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10')
    return response.json()
}
