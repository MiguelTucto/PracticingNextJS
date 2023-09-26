"use client";

import SignUpForm from "@components/SignUpForm";
import {useState} from "react";
import {useFormik} from "formik";
import axios from "axios";
import * as Yup from 'yup';
import {useRouter} from "next/navigation";
import {error} from "@node_modules/next/dist/build/output/log";
import {NextResponse} from "next/server";

const SignUp = () => {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            location: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(5, 'Nombre mayor a 5 caracteres')
                .max(25, 'Nombre máximo 25 caracteres')
                .required('Campo Requerido'),
            phone: Yup.number()
                .required('Campo Requerido'),
            location: Yup.string()
                .min(5, 'Dirección mayor a 5 caracteres')
                .required('Campo Requerido'),
            email: Yup.string()
                .email('Email invalido')
                .required('Campo Requerido'),
            password: Yup.string()
                .required('Campo Requerido'),
            confirmPassword: Yup.string()
                .required('Campo Requerido'),
        }),
        onSubmit: async (values) => {
            console.log("user registered: ", values);

            try {
                setSubmitting(true);
                const registeredNewUser = {
                    name: values.name,
                    phone: values.phone,
                    location: values.location,
                    email: values.email,
                    password: values.password
                }

                const response = await axios.post("api/auth/signup", registeredNewUser);

                console.log("Signup success: ", response.data);
                console.log("User added is: ", registeredNewUser);

            } catch (e) {
                console.log("Signup failed: ", e.message);

            } finally {
                setSubmitting(false);
                router.push("/");
            }
        }
    })

    return (
        <>
            <SignUpForm
                formik={formik}
                submitting={submitting}
            />
        </>
    )
}

export default SignUp;