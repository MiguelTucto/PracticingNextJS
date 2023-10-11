import React, {useEffect, useState} from 'react';
import {head} from "axios";
import {useRouter} from "next/navigation";
const MakeShowComponent = ({shows}) => {

    const [headers, setHeaders] = useState([]);
    const router = useRouter();
    const selectedKeys = () => {
        const y = [];

        for (let x in shows[0]) {
            if (x !== '_id' && x !== 'creator' && x !== '__v') {
                y.push(x);
                setHeaders(y);
                console.log("x is: ", y);
            }
        }

    }

    useEffect(() => {
        console.log("Shows are: ", shows)
        selectedKeys()
    },[shows]);

    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            {headers.map((header) => (
                                <th key={header} scope="col" className="px-6 py-3">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {
                        shows.map (show => (
                            <>
                                <tbody key={show.id}>
                                    <tr className="bg-white border-b border-gray-200 hover:bg-gray-50" onClick={() => {router.push(`/updateshow?id=${show._id}`)}}>
                                        <td className="px-6 py-4 ">{show.status}</td>
                                        <td className="px-6 py-4">{show.description}</td>
                                        <td className="px-6 py-4">{show.date}</td>
                                        <td className="px-6 py-4">{show.startTime}</td>
                                        <td className="px-6 py-4">{show.creditBalance}</td>
                                    </tr>
                                </tbody>
                            </>
                        ))
                    }
                </table>
            </div>
        </>
    )
}
export default MakeShowComponent;