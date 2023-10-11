const UpdateShowComponent = ({shows, handleUpdate, handleChange, editable, setEditable}) => {
    return (
        <>
            <div className="rounded-md shadow-lg p-10 flex flex-col " >

                <h1 className="font-satoshi font-bold">Aquí podras editar tu formulario {shows._id}</h1>
                <div className="flex flex-row justify-between align-middle ">
                    <div className="flex flex-col gap-3">
                        <div>
                            <label>Estado:</label>
                            {
                                editable ? (<input value={shows.status} onChange={(e) => handleChange(e, "status")} className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>) : (<p>{shows.status}</p>)
                            }
                        </div>
                        <div>
                            <label>Descripción:</label>
                            {
                                editable ? (<input value={shows.description} onChange={(e) => handleChange(e, "description")} className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>) : (<p>{shows.description}</p>)
                            }
                        </div>
                        <div>
                            <label>Fecha:</label>
                            {
                                editable ? (<input value={shows.date} onChange={(e) => handleChange(e, "date")} className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>) : (<p>{shows.date}</p>)
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>
                            <label>Hora:</label>
                            {
                                editable ? (<input value={shows.startTime} onChange={(e) => handleChange(e, "startTime")} className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>) : (<p>{shows.startTime}</p>)
                            }

                        </div>
                        <div>
                            <label>Adelanto:</label>
                            {
                                editable ? (<input value={shows.creditBalance} onChange={(e) => handleChange(e, "creditBalance")} className="border-gray-300  flex-1 min-w-0 rounded-none rounded-r-lg  border text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>) : (<p>{shows.creditBalance}</p>)
                            }

                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    {
                        editable ? (
                            <>
                                <button className="appearance-none flex items-end justify-center block w-12 bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none" onClick={() => {setEditable(!editable)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <button className="appearance-none flex items-end justify-center block w-12 bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none" onClick={handleUpdate}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </button>
                            </>
                        ) : (
                            <button className="appearance-none flex items-end justify-center block w-12 bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none" onClick={() => {setEditable(!editable)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default UpdateShowComponent;