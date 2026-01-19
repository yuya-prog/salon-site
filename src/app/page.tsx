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

      {/* ヒーローセクション */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center py-20">
        <div className="max-w-4xl px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#d4af37]">
            Concept
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-gray-300">
            <p>
              私たちは、一人ひとりのお客様の個性を大切にしながら、
              最高の技術とおもてなしで、あなたの魅力を最大限に引き出します。
            </p>

            <p>
              髪は、その人らしさを表現する大切な要素です。
              だからこそ、丁寧なカウンセリングを通じて、
              あなたのライフスタイルや理想のイメージをしっかりとお伺いします。
            </p>

            <p>
              最新のトレンドを取り入れながらも、
              時代に流されない普遍的な美しさを追求し、
              あなただけのスタイルを創り上げます。
            </p>
          </div>
        </div>
      </section>

      {/* メニューセクション */}
      <section className="min-h-screen bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#d4af37]">
            Menu
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* カット */}
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition">
              <h3 className="text-2xl font-bold mb-4">Cut</h3>
              <p className="text-gray-400 mb-4">カット</p>
              <p className="text-3xl font-bold text-[#d4a37]">¥5,000</p>
            </div>
            {/* カラー */}
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition">
              <h3 className="text-2xl font-bold mb-4">Color</h3>
              <p className="text-gray-400 mb-4">カラー</p>
              <p className="text-3xl font-bold text-[#d4a37]">¥8,000</p>
            </div>
            {/* パーマ */}
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition">
              <h3 className="text-2xl font-bold mb-4">Perm</h3>
              <p className="text-gray-400 mb-4">パーマ</p>
              <p className="text-3xl font-bold text-[#d4a37]">¥10,000</p>
            </div>
            {/* トリートメント */}
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition">
              <h3 className="text-2xl font-bold mb-4">Treatment</h3>
              <p className="text-gray-400 mb-4">トリートメント</p>
              <p className="text-3xl font-bold text-[#d4a37]">¥3,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* スタッフセクション */}
      <section className="min-h-screen bg-gray-900 text-white py-200">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#d4af37]">
            Stylist
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* スタイリスト1 */}
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2">田中 太郎</h3>
              <p className="text-gray-400 mb-2">代表 / スタイリスト</p>
              <p className="text-sm text-gray-500">経験年数：15年</p>
            </div>
            {/* スタイリスト2 */}
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2">鈴木 花子</h3>
              <p className="text-gray-400 mb-2">トップスタイリスト</p>
              <p className="text-sm text-gray-500">経験年数：10年</p>
            </div>
            {/* スタイリスト3 */}
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2">佐藤 次郎</h3>
              <p className="text-gray-400 mb-2">スタイリスト</p>
              <p className="text-sm text-gray-500">経験年数：8年</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
