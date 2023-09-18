const SignUpForm = ({ formik }) => {
    return (
        <>
            <section className=" flex-col justify-items-center items-center  ">
                <form onSubmit={formik.handleSubmit} className="mt-10  flex flex-col gap-4 glassmorphism">
                    <label htmlFor="name" className="block font-medium text-gray-900 text-xl">Nombre Completo</label>
                    <div className="flex ">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </span>

                        <input
                            type="text"
                            id="name"
                            className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            {...formik.getFieldProps('name')}
                        />
                        {
                            formik.touched.name && formik.errors.name ? (
                                <div>{formik.errors.name}</div>) : null
                        }
                    </div>
                    <label htmlFor="phone" className="block  font-medium text-gray-900 text-xl">Número de Celular</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </span>
                        <input
                            type="phone"
                            id="phone"
                            className=" rounded-none rounded-r-lg border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            {...formik.getFieldProps('phone')}
                        />
                        {
                            formik.touched.phone && formik.errors.phone ? (
                                <div>{formik.errors.phone}</div>) : null
                        }
                    </div>
                    <label htmlFor="location" className="block font-medium text-gray-900 text-xl">Dirección</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"className="w-4 h-4 text-gray-500 dark:text-gray-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            id="location"
                            className=" rounded-none rounded-r-lg border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            {...formik.getFieldProps('location')}
                        />
                        {
                            formik.touched.location && formik.errors.location ? (
                                <div>{formik.errors.location}</div>) : null
                        }
                    </div>

                    <label htmlFor="email" className="block font-medium text-gray-900 text-xl">Email</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>
                        </span>
                        <input
                            type="email"
                            id="email"
                            className=" rounded-none rounded-r-lg border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            {...formik.getFieldProps('email')}
                        />
                        {
                            formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>) : null
                        }
                    </div>
                    <label htmlFor="password" className="block font-medium text-gray-900 text-xl">Contraseña</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                            </svg>
                        </span>
                        <input
                            type="password"
                            id="password"
                            className=" rounded-none rounded-r-lg border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            {...formik.getFieldProps('password')}
                        />
                        {
                            formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>) : null
                        }
                    </div>
                    <label htmlFor="confirmPassword" className="block font-medium text-gray-900 text-xl">Confirmar Contraseña</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                            </svg>
                        </span>
                        <input
                            type="password"
                            id="confirmPassword"
                            className=" rounded-none rounded-r-lg border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            {...formik.getFieldProps('confirmPassword')}
                        />
                        {
                            formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div>{formik.errors.confirmPassword}</div>) : null
                        }
                    </div>
                    <button type="submit" className="text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Registrar</button>
                </form>
            </section>
        </>
    )
}

export default SignUpForm;