import React from 'react'
import Image from 'next/image';
import blogImage from '../assets/blog.jpg'

const Hero = () => {
    return (
        <div className=" bg-base-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 items-center">
                <div className="">
                    <Image src={blogImage} alt="hero" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Welcome to The Daily Muse!</h1>
                    <p className="py-6">
                        Dive into a world of stories, insights, and inspirations. Whether you're here for travel tales, tech trends, or mouth-watering recipes, we've got something for everyone. Stay curious and explore the extraordinary!
                </p>
                    <button className="btn btn-primary">Start Exploring</button>
                </div>

            </div>
        </div>
    )
}

export default Hero