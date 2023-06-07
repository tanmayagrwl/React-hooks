import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    const [id, setID] = useState(1)
    const[post, setPost] = useState({}) 

    useEffect(()=>{
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res=>{
                console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])

  return (
    <div>
        <input type="text" value={id} onChange={e=> setID(e.target.value)} />
        <div>{post.title}</div>
        {/* <ul>
            {
                post.map(post => <li key={post.id} >{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default DataFetching