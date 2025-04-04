import React, { useEffect, useState } from 'react'
import { apiService } from '../assets/api/apiService';
const ApiServiceExp = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        apiService.posts()
        .then((res) => setPosts(res.data))
        .catch((err) => console.log('error fetching data',err))
    },[])

  return (
    <div>
        <ul>

        
        {posts.map((post) => {
            const{title,body,id} = post;
            return(
                <div key={id}>
                    <li >{title}</li>
                    <li >{body}</li>
                </div>
            )

        })}
    </ul>
    </div>
  )
}

export default ApiServiceExp