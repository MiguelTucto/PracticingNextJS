"use client";

import ShowListComponent from "@components/ShowListComponent";
import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import {useSession} from "@node_modules/next-auth/react";

const ShowList = () => {
    const { data: session } = useSession();

    const formik = useFormik({
        initialValues: {
            status: '',
            description: '',
            date: '',
            startTime: '',
            creditBalance: ''
        },
        validationSchema: Yup.object({
            status: Yup.string()
                .required('Campo Requerido'),
            description: Yup.string()
                .required('Campo Requerido'),
            date: Yup.date()
                .required('Campo Requerido'),
            startTime: Yup.string()
                .required('Campo Requerido'),
            creditBalance: Yup.number()
                .required('Campo Requerido')
        }),
        onSubmit: async ( values ) => {
            const registerNewShow = {
                userId: session.user.id,
                status: values.status,
                description: values.description,
                date: values.date,
                startTime: values.startTime,
                creditBalance: values.creditBalance
            }

            const response = await axios.post("api/show/new", registerNewShow)

            console.log("Show Registered: ", response.data);
        }
    })

    return (
        <>
            <ShowListComponent
                formik={formik}
            />
        </>
    )
}

export default ShowList;