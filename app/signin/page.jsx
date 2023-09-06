"use client";

import SignInComponent from "@components/SignInComponent";
import * as Yup from 'yup';
import {useState} from "react";
import {useFormik} from "formik";
import {signIn} from "@node_modules/next-auth/react";
import {router} from "@node_modules/next/dist/client";

const SignIn = () => {
    const [user, setUser] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Email invalido')
                .max(20, 'Debe contener 15 caracteres o menos')
                .required('Campo Requerido'),
            password: Yup.string()
                .max(50, 'Debe contener 50 caracteres o menos')
                .required('Campo requerido'),
        }),
        onSubmit: values => {
            console.log("it works", values);
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        console.log("register user works: ", user);
    }

    const handleClickGoogle = async () => {
       await signIn('google', {callbackUrl: "http://localhost:3000"});
       await router.push("/");
    }

    return (
        <>
            <SignInComponent
                user={user}
                setUser={setUser}
                submitting={submitting}
                handleSubmit={handleSubmit}
                handleClickGoogle={handleClickGoogle}
                formik={formik}
            />
        </>
    )
}

export default SignIn;