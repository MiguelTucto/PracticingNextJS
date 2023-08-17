"use client";

import Link from "next/link";
import {useState} from "react";

const Nav = () => {
    const [session, setSession] = useState(false);
    return (
        <>
            <nav className="w-full flex justify-between my-7 ">
                <Link href="/" className="font-satoshi font-bold text-xl text-blue-800 ">
                    Mariachi America
                </Link>
                {
                    session ? (
                        <>
                            <div>
                                <Link href="/">
                                    Tus Reservas
                                </Link>
                                <Link href="/">
                                    Contratar
                                </Link>
                                <Link href="/">
                                    Log Out
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex gap-3">
                                <Link href="/signup" className="text-xl hover:bg-yellow-200 border-2 border-yellow-200  p-3 rounded-full">
                                    Registrarse
                                </Link>
                                <Link href="/signin" className="text-xl bg-yellow-200 text-white hover:bg-yellow-200 text-black border-2 border-yellow-200  p-3 rounded-full">
                                    Ingresar
                                </Link>
                            </div>
                        </>
                    )
                }
            </nav>
        </>
    )
}

export default Nav;