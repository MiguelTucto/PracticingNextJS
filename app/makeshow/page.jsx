"use client";

import MakeShowComponent from "@components/MakeShowComponent";
import {useEffect, useState} from "react";
import axios from "axios";
import {set} from "mongoose";

const MakeShow = () => {
    const [shows, setShows] = useState([]);

    const getAllShowsByUserId =  async () => {
         await axios.get("api/show")
             .then(response  => {
                 setShows(response.data.data);
                 console.log("The shows are 1: ", response.data.data);
             })
             .catch(e => console.log("An error occurred retrieving All Shows", e));
    }



    useEffect(() => {
        getAllShowsByUserId().then();
    }, []);

    return (
        <>
            {
                <MakeShowComponent
                    shows={shows}
                />
            }
        </>
    );
}

export default MakeShow;