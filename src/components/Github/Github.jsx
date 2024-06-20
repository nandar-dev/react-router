import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/nandar-dev').then(res => res.json().then(data => {
    //         setData(data);
    //     }))
    // }, [])
    return (
        <div className='bg-gray-600 text-white text-3xl p-4'>Github followers: {data.followers}

            <img src={data.avatar_url} width={300} alt="Github Image" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/nandar-dev')
    return response.json();
}