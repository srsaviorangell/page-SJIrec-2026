
     
        <div className="flex flex-col gap-6">
          
          {/* TÍTULO */}
          <h1 className="
            text-4xl md:text-5xl 
            font-bold 
            text-white
            leading-tight
          ">
            A festa começou
          </h1>
          
          {/* DESCRIÇÃO */}
          <p className="
            text-white/90 
            text-lg 
            max-w-xl
            leading-relaxed
          ">
            Acompanhe todos os eventos e tenha seu ritmo personalizado
          </p>
          
          {/* TEXTO BAIXE O APP */}
          <p className="
            text-white 
            font-semibold 
            text-base
            mt-2
          ">
            Baixe o aplicativo:
          </p>
          
          {/* BOTÕES */}
          <div className="
            flex 
            flex-col sm:flex-row 
            gap-4 
            mt-2
          ">
            
            {/* APP STORE */}
            <button className="
              flex 
              items-center 
              gap-3 
              bg-white 
              text-[#F54900] 
              px-6 
              py-3.5 
              rounded-xl 
              font-semibold
              hover:bg-gray-100 
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
            ">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 50 50"
                fill="currentColor"
              >
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">Download on the</span>
                <span className="text-lg font-bold -mt-1">App Store</span>
              </div>
            </button>
            
            {/* PLAY STORE */}
            <button className="
              flex 
              items-center 
              gap-3 
              bg-black 
              text-white 
              px-6 
              py-3.5 
              rounded-xl 
              font-semibold
              hover:bg-gray-900 
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
            ">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 50 50"
                fill="currentColor"
              >
                <path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">GET IT ON</span>
                <span className="text-lg font-bold -mt-1">Google Play</span>
              </div>
            </button>oklch(52.7% 0.154 150.069)
            
          </div>
        </div>
      </div>
    </div>
  );
}