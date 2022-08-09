export default function HeroTwo(){
    return(<aside
        class="overflow-hidden bg-[url(/hero2.svg)] bg-center bg-no-repeat bg-cover"
      >
        <div class="p-8 md:p-12 lg:px-16 lg:py-24 bg-green-900/25">
          <div class="max-w-xl text-center sm:text-left">
            <h2 class="text-2xl font-bold text-black/80 bg-white/30  sm:text-3xl md:text-5xl font-poppins">
            Los trabajos patrocinados tienen 4.5 veces más probabilidades de resultar en una contratación*.
            </h2>
      
            <div class="mt-4 sm:mt-8">
              <a
                class="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800"
                href="/solicitar"
              >
                <span class="text-sm font-medium"> Contrata Ahora </span>
      
                <svg
                  class="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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