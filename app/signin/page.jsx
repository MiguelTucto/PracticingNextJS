"use client";

import SignInComponent from "@components/SignInComponent";
import * as Yup from 'yup';
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import {signIn, useSession} from "@node_modules/next-auth/react";

import {getProviders} from "next-auth/react";
import {useRouter} from "@node_modules/next/dist/client/components/navigation";
const SignIn = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [user, setUser] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [providers, setProviders] = useState(null);
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
        onSubmit: async (values) => {
            const status = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
                callbackUrl: "/"
            })
            console.log(status);
        }
    })

    const getAllProviders = async () => {
        const response = await getProviders();
        setProviders(response);
        console.log("Providers: ", response);
        Object.values(response).map((provider) => {
            console.log(provider.id, provider.name);
        })
    }

    useEffect(() => {
        getAllProviders();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        console.log("register user works: ", user);
    }

    const handleClickGoogle = async () => {
       await signIn('google');
       await router.push("/");
    }

    const backToHome = () => {
        router.push("/");
    }

    return (
        <>
            {
                session ? (
                    <>
                        <button onClick={backToHome}>You are already log in. Please click this button to enjoy our application</button>
                    </>
                ) : (
                    <>
                        <SignInComponent
                            user={user}
                            setUser={setUser}
                            submitting={submitting}
                            handleSubmit={handleSubmit}
                            handleClickGoogle={handleClickGoogle}
                            formik={formik}
                            providers={providers}
                        />
                    </>
                )
            }
        </>
    )
}

export default SignIn;