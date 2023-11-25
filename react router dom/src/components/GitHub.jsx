import React from "react";
import { useParams } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";

function GitHub(){
    const {userid} = useParams();

    const data = useLoaderData();

    return (
        <>
            <div className="flex justify-center bg-black text-3xl text-white">
                User: {userid ? userid : "no id"}
            </div>
            <div>
                <h1>
                    GitHub Followers : {data.followers}
                </h1>
                <img src={data.avatar_url} alt="github image" />
            </div>
        </>
    )
}

export default GitHub;

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/VivekHalder')
    const data = await res.json();

    return data;
}