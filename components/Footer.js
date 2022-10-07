import Layout from '../components/layout'

function Footer() {
    let user = false;
return (
        <footer className="bg-lime-100 ">
            <div
                className="relative max-w-screen-xl mx-auto sm:px-6 lg:px-8 lg:pt-3"
            >

                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center text-teal-600 lg:justify-start">
                        </div>
                        <img
                        className="h-24 mx-auto md:h-28"
                        src='/logo.png'>
                        </img>
                        <p
                            className="text-lg max-w-md mx-auto mt-6 leading-relaxed text-center text-lime-900 lg:text-left PText"
                        >
                            Conexiones que necesitas
                        </p>
                        <p
                            className="text-lg max-w-md mx-auto mt-6 leading-relaxed text-center text-lime-900 lg:text-left PText"
                        >
                            SACCULUM - Bolsa de trabajo
                        </p>
                    </div>

                    <nav className="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
                        <h2 className="sr-only" id="footer-navigation">Navegacion del footer</h2>

                        <ul
                            className="flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8  lg:gap-12"
                        >
                            <li>
                                <center>
                                    <a className="text-gray-700 transition hover:text-gray-700/75 Font" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#323F1B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <polyline points="3 7 12 13 21 7" />
                                    </svg>
                                        <p className="text-lg max-w-md mx-auto mt-6 leading-relaxed text-center text-lime-900 lg:text-left PText">
                                        bolsa_ricaldone@gmail.com
                                        </p>
                                    </a>
                                </center>
                            </li>
                            <li>
                                <center>
                                    <a className="text-gray-700 transition hover:text-gray-700/75 Font" href="http://localhost:3000/advanced/profiles">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#323F1B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                        <p className="text-lg max-w-md mx-auto mt-6 leading-relaxed text-center text-lime-900 lg:text-left PText">
                                        Perfiles
                                        </p>
                                    </a>
                                </center>
                            </li>
                            <li>
                                <center>
                                    <a className="text-gray-700 transition hover:text-gray-700/75 Font" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#323F1B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                    </svg>
                                        <p className="text-lg max-w-md mx-auto mt-6 leading-relaxed text-center text-lime-900 lg:text-left PText">
                                        +(503) 1276-0983
                                        </p>
                                    </a>
                                </center>

                            </li>
                        </ul>
                    </nav>
                </div>

                <p className="mt-12 text-sm text-center text-lime-600 lg:text-right PText">
                    Copyright Sacculum &copy; {new Date().getFullYear()} . Todos los derechos reservados.
                </p>
            </div>
        </footer> 
)
}
export default Footer