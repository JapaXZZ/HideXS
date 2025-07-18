export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950/20 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-6">
          HideXS
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Ferramentas avançadas para automação educacional e produtividade
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-semibold hover:scale-105 transition-transform duration-200">
            Explorar Scripts
          </button>
          <button className="px-8 py-4 border border-purple-500 rounded-2xl text-purple-400 font-semibold hover:bg-purple-500/10 transition-colors duration-200">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  )
}
