import Layout from '../components/layout'

function Footer() {
    let user = false;
return (
        <footer className="bg-gray-100">
            <div
                className="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24"
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
                            className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500 lg:text-left PText"
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                            consequuntur amet culpa cum itaque neque.
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
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x="3" y="5" width="18" height="14" rx="2" />
                                            <polyline points="3 7 12 13 21 7" />
                                        </svg>
                                        bolsa_ricaldone@gmail.com
                                    </a>
                                </center>
                            </li>
                            <li>
                                <center>
                                    <a className="text-gray-700 transition hover:text-gray-700/75 Font" href="http://localhost:3000/advanced/profiles">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx="12" cy="7" r="4" />
                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        </svg>
                                        Perfiles
                                    </a>
                                </center>
                            </li>
                            <li>
                                <center>
                                    <a className="text-gray-700 transition hover:text-gray-700/75 Font" href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                        </svg>
                                        +(503) 1276-0983
                                    </a>
                                </center>

                            </li>
                        </ul>
                    </nav>
                </div>

                <p className="mt-12 text-sm text-center text-gray-400 lg:text-right PText">
                    Copyright Sacculum &copy; {new Date().getFullYear()} . Todos los derechos reservados.
                </p>
            </div>
        </footer> 
)
}
export default Footer