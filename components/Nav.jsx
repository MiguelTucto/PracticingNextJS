"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {useSession, signOut, getProviders} from "next-auth/react";
import Image from "next/image";

const Nav = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const logOut = () => {
        console.log("sign out works!");
        signOut();

    }

    const getProviderMethod = async () => {
        const res = await getProviders();
        setProviders(res);
        console.log("Providers: ", res);
        Object.values(res).map((provider) => {
            console.log(provider.id, provider.name);
        })

    }

    useEffect(() => {
        getProviderMethod();
    }, []);

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
                                <span>Welcome { session.user.name }</span>

                                <button type="button" onClick={logOut}>Sign Out</button>

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