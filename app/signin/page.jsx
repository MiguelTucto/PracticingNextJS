"use client";

import SignInComponent from "@components/SignInComponent";
import {useState} from "react";

const SignIn = () => {

    const [user, setUser] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        console.log("register user works: ", user);
    }

    return (
        <>
            <SignInComponent
                user={user}
                setUser={setUser}
                submitting={submitting}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default SignIn;