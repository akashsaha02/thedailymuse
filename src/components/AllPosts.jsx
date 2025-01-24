'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const AllPosts = () => {

    const [post, setpost] = useState([]);

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            if (res.status === 200) {
                setpost(res.data)
            }
        }
        fetchData()
    })
    return (
        <div>


            <h2 className="text-center text-xl md:text-3xl font-semibold text-primary my-8">All posts ({post.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {post.length > 0 ? post.map((item, index) => (
                    <div key={index} className="card bg-primary text-primary-content w-96 mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.body}</p>
                            <div className="card-actions justify-end">
                                <button

                                    onClick={() => router.push(`/blogs/${item.id}`)}


                                    className="btn">View Details</button>
                            </div>
                        </div>
                    </div>
                )) : <h1>No Posts Found</h1>}
            </div>

        </div>
    )
}

export default AllPosts
