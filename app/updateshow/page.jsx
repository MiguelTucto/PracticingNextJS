"use client";

import UpdateShowComponent from "@components/UpdateShowComponent";
import {useSearchParams} from "@node_modules/next/dist/client/components/navigation";
import {useSession} from "@node_modules/next-auth/react";
import axios from "axios";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "@node_modules/yup";
import ShowListComponent from "@components/ShowListComponent";

const UpdateShow = () => {
    const searchParams = useSearchParams();
    const getShowId = searchParams.get("id");
    const { data: session } = useSession();
    const [shows, setShows] = useState({});
    const [editable, setEditable] = useState(false)
    const fetchShowById = async () => {
        await axios.get(`api/show/${getShowId}`)
            .then( response => {
                setShows(response.data.data);
            })
            .catch(e => console.log("An error occurred retrieving a Show", e));
    }

    useEffect(() => {
        if (getShowId) fetchShowById().then();
    }, [getShowId]);

    const handleChange = (event, field) => {
        const value = event.target.value;
        setShows({ ...shows, [field]: value });
    }

   const handleUpdate = async (e) => {
        e.preventDefault();
        if (!getShowId) return alert("Missing ShowId");
        try {
            await axios.put(`api/show/${getShowId}`, shows)
                .then(response => console.log("This is the new show: ", response))
                .catch(e => console.log("There is an error while updating Show: ", e));
        } catch (e) {
            console.log("An error occurred while updating Show: ", e);
        } finally {
            setEditable(false);
        }

   }

    return (
        <>
            <UpdateShowComponent
                shows={shows}
                editable={editable}
                setEditable={setEditable}
                handleChange={handleChange}
                handleUpdate={handleUpdate}
            />
        </>
    )
}

export default UpdateShow;