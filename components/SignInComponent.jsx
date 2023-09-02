const SignInComponent = ({ user, setUser, submitting, handleSubmit, formik }) => {
    return (
        <>
            {
                /*
                <section className="max-w-full  rounded shadow-md bg-yellow-200 grid grid-cols-2 divide-x">
                <div className="max-w-screen-xl mx-auto p-6  ">
                    <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-center mx-auto">
                        <label className="block font-medium text-gray-900 text-xl">Correo</label>
                        <div className="flex ">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </span>
                            <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value })} type="text" id="name" className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                        </div>
                        <label className="block font-medium text-gray-900 text-xl">Contraseña</label>
                        <div className="flex ">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                </svg>
                            </span>
                            <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value })} type="text" id="name" className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                        </div>
                        <button type="submit" disabled={submitting} className="w-auto mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Ingresar
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="flex flex-col justify-center p-6">
                    <button type="button" className="text-white bg-[#1877f2] hover:bg-[#1877f2]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2">
                        Log in With Facebook
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </button>
                    <button type="button" className="text-white  bg-[#ea4335] hover:bg-[#ea4335]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        Sign up with Google
                        <svg className="h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                            <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                    </button>

                </div>
            </section>

                */
            }
            <section className="max-w-full  rounded shadow-md bg-yellow-200 grid grid-cols-2 divide-x">
                <div className="max-w-screen-xl mx-auto p-6  ">
                    <form onSubmit={formik.handleSubmit} className="space-y-6 flex flex-col justify-center mx-auto">
                        <label className="block font-medium text-gray-900 text-xl" htmlFor="email">Correo</label>
                        <div className="flex ">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </span>
                            <input
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                id="email"
                                {...formik.getFieldProps('email')}
                                className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            />
                            {
                                formik.touched.email && formik.errors.email ? (
                                    <div>{formik.errors.email}</div>) : null
                            }
                        </div>

                        <label className="block font-medium text-gray-900 text-xl" htmlFor="password">Contraseña</label>
                        <div className="flex ">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                </svg>
                            </span>
                            <input
                                value={formik.values.password}
                                onChange={formik.onChange}
                                onBlur={formik.onBlur}
                                type="password"
                                id="password"
                                {...formik.getFieldProps('password')}
                                className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            />
                            {
                                formik.touched.password && formik.errors.password ? (
                                    <div>{formik.errors.password}</div>) : null
                            }
                        </div>
                        <button type="submit" className="w-auto mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Ingresar
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="flex flex-col justify-center p-6">
                    <button type="button" className="text-white bg-[#1877f2] hover:bg-[#1877f2]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2">
                        Log in With Facebook
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </button>
                    <button type="button" className="text-white  bg-[#ea4335] hover:bg-[#ea4335]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        Sign up with Google
                        <svg className="h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                            <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                    </button>

                </div>
            </section>
        </>
    )
}

export default SignInComponent;