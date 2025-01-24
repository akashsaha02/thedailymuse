'use client'

import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";





const page = () => {

  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {


    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
      if (res.status === 200) {
        setPost(res.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  }, [id])


  return (
    <div>
      <div className="card bg-base-200 text-base-content w-96 mx-auto">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  )
}

export default page
