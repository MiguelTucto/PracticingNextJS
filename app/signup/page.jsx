"use client";

import SignUpForm from "@components/SignUpForm";
import {useState} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';

const SignUp = () => {
    const [submitting, setSubmitting] = useState(false);
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
                .as
                .required('Campo Requerido'),
        }),
        onSubmit: values => {
            console.log("user registered: ", values);
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('user registered v2: ');
    }

    return (
        <>
            <SignUpForm
                formik={formik}
            />
        </>
    )
}

export default SignUp;