export default function HeroTwo(){
    return(<aside
        className="overflow-hidden bg-[url(/hero2.svg)] bg-center bg-no-repeat bg-cover"
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-green-900/25">
          <div className="max-w-xl text-center sm:text-left">
            <div className="bg-white/30">
                <h2 className="text-2xl font-bold text-black/80  sm:text-3xl md:text-5xl font-poppins">
                Los trabajos patrocinados tienen 4.5 veces más probabilidades de resultar en una contratación*.
                </h2>
                <p>*Datos reales de Indeed, Mundialmente.</p>
            </div>
            <div className="mt-4 sm:mt-8">
              <a
                className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800"
                href="/solicitar"
              >
                <span className="text-sm font-medium"> Contrata Ahora </span>
      
                <svg
                  className="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>
      )
}