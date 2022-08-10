import Link from "next/link";

export default function Hero(){
    return (
        <aside
        className="overflow-hidden bg-green-saculum-lighter sm:grid sm:grid-cols-2 sm:items-center font-poppins"
        >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="max-w-xl mx-auto text-center sm:text-left">
            <h2 className="text-4xl font-bold text-gray-900 ">
            Estás aquí para contratar.<br></br>
            Nosotros para ayudar.
            </h2>

            <p className="hidden text-gray-700 md:mt-4 md:block">
            Revisa candidatos, solicita su información . Empiece a contratar hoy.
            </p>

            <div className="mt-4 md:mt-8">
                <Link href="/solicitar">
                        <a
                        className="relative inline-block group focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                        <span
                            className="relative z-10 block px-12 py-3 text-sm font-medium text-white transition bg-gray-900 rounded group-hover:scale-105"
                        >
                            Empiece Ahora
                        </span>

                        <span
                            className="absolute inset-0 transition scale-105 rounded bg-gray-900/25 -rotate-3 group-hover:rotate-0"
                        ></span>
                        </a>
                </Link>
            </div>
            </div>
        </div>
        <img
            src="/index2.svg"
            className="h-2/3 mx-auto"
        />
        </aside>


    )
}