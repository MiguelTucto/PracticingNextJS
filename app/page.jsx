"use client"
import Link from "next/link";
import { useSession } from "@node_modules/next-auth/react";

const Home = () => {
    const { data: session } = useSession();
    return (
        <>
            {
                session ? (
                    <>
                        <section className=" flex flex-col justify-items-center items-center">
                            <h1 className="head_text text-center">Welcome { session.user.name } to Mariachi America</h1>
                        </section>
                    </>
                ) : (
                    <>
                        <section className=" flex flex-col justify-items-center items-center">
                            <h1 className="head_text text-center">
                                <br className="max-md:hidden"/>
                                <span className="orange_gradient text-center"> Mariachi America Ayacucho</span>
                            </h1>
                            <p className="desc text-center">
                                Siempre al servicio de todos ustedes, las 24 horas del día y los 7 días de la semana.
                            </p>
                            <Link href="/" className="mt-5 bg-blue-400 p-3 rounded-2xl">
                                Generar Reserva
                            </Link >
                        </section>
                    </>
                )
            }
        </>
    );
}

export default Home;