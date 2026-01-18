export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="h-screen flex flex-col  justify-center relative">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-0"></div>
        {/* コンテンツ */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wider">
            SALON NAME
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            あなたの髪に、新しい輝きを
          </p>
          <a
            href="#reservation"
            className="inline-block px-12 py-4 bg-[#d4af37] text-black font-bold tex-lg rounded hover:bg-[#f0c14b] transition"
          >
            ご予約はこちら
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 - translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>
      <div className="bg-red h-10"></div>
    </main>
  );
}
