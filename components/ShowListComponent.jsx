const ShowListComponent = ({ formik }) => {
    return (
        <>
            <section className=" flex-col justify-items-center items-center  ">
                <form onSubmit={formik.handleSubmit} >
                    <label htmlFor="status" className="block font-medium text-gray-900 text-xl">Estado del Compromiso</label>
                    <div className="flex ">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </span>

                        <input
                            type="text"
                            id="status"
                            className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            value={formik.values.status}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            {...formik.getFieldProps('status')}
                        />
                        {
                            formik.touched.status && formik.errors.status ? (
                                <div>{formik.errors.status}</div>) : null
                        }
                    </div>


                    <label htmlFor="description" className="block font-medium text-gray-900 text-xl">Descripción</label>
                    <div className="flex ">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </span>

                        <input
                            type="text"
                            id="description"
                            className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            {...formik.getFieldProps('description')}
                        />
                        {
                            formik.touched.description && formik.errors.description ? (
                                <div>{formik.errors.description}</div>) : null
                        }
                    </div>


                    <label htmlFor="date" className="block font-medium text-gray-900 text-xl">Fecha</label>
                    <div className="flex ">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </span>

                        <input
                            type="date"
                            id="date"
                            className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            {...formik.getFieldProps('date')}
                        />
                        {
                            formik.touched.date && formik.errors.date ? (
                                <div>{formik.errors.date}</div>) : null
                        }
                    </div>


                    <label htmlFor="startTime" className="block font-medium text-gray-900 text-xl">Hora de Inicio</label>
                    <div className="flex ">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </span>

                        <input
                            type="time"
                            id="startTime"
                            className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            value={formik.values.startTime}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            {...formik.getFieldProps('startTime')}
                        />
                        {
                            formik.touched.startTime && formik.errors.startTime ? (
                                <div>{formik.errors.startTime}</div>) : null
                        }
                    </div>


                    <label htmlFor="creditBalance" className="block font-medium text-gray-900 text-xl">Adelanto</label>
                    <div className="flex ">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </span>

                        <input
                            type="number"
                            id="creditBalance"
                            className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            value={formik.values.creditBalance}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            {...formik.getFieldProps('creditBalance')}
                        />
                        {
                            formik.touched.creditBalance && formik.errors.creditBalance ? (
                                <div>{formik.errors.creditBalance}</div>) : null
                        }
                    </div>
                    <button type="submit" className="w-auto mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Ingresar
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </form>
            </section>
        </>
    )
}

export default ShowListComponent;