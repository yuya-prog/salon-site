export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="h-screen flex flex-col  justify-center relative">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/80 z-0"></div>
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
      <section className="min-h-screen bg-gray-900 text-white py-20">
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

      {/* ギャラリーセクション */}
      <section className="min-h-screen bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#d4af37]">
            Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square bg-gray-700 rouded-lg"></div>
            <div className="aspect-square bg-gray-700 rouded-lg"></div>
            <div className="aspect-square bg-gray-700 rouded-lg"></div>
            <div className="aspect-square bg-gray-700 rouded-lg"></div>
            <div className="aspect-square bg-gray-700 rouded-lg"></div>
            <div className="aspect-square bg-gray-700 rouded-lg"></div>
          </div>
        </div>
      </section>

      {/* アクセスセクション */}
      <section className="min-h-screen bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#d4af37]">
            Access
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 地図 */}
            <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Google Map</p>
            </div>

            {/* 情報 */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#d4af37]">住所</h3>
                <p className="text-gray-300">
                  〒150-0001
                  <br />
                  東京都渋谷区神宮前1-2-3
                  <br />
                  サロンビル 2F
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[#d4af37]">
                  営業時間
                </h3>
                <p className="text-gray-300">
                  平日：10:00 - 20:00
                  <br />
                  土日祝：10:00 - 19:00
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[#d4af37]">
                  定休日
                </h3>
                <p className="text-gray-300">
                  毎週月曜日
                  <br />
                  第3火曜日
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-[#d4af37]">電話</h3>
                <p className="text-gray-300">03-1234-5678</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 予約フォーム */}
      <section className="min-h-screen bg-black text-white py-20">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#d4af37]">
            Reservation
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                お名前<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-[#d4af37] transition"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                メールアドレス<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-[#d4af37] transition"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="date" className="block mb-2 text-sm font-medium">
                希望日時<span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                id="date"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-[#d4af37] transitiond"
              />
            </div>

            {/* メニュー */}
            <div>
              <label htmlFor="menu" className="block mb-2 text-sm font-medium">
                希望メニュー <span className="text-red-500">*</span>
              </label>
              <select
                id="menu"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-[#d4af37] transition appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23d4af37' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: "right 0.5rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
                <option value="">選択してください</option>
                <option value="cut">カット - ¥5,000</option>
                <option value="color">カラー - ¥8,000</option>
                <option value="perm">パーマ - ¥10,000</option>
                <option value="treatment">トリートメント - ¥3,000</option>
              </select>
            </div>

            {/* メッセージ */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                ご要望・ご質問
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-[#d4af37] transition resize-none"
                placeholder="ご要望やご質問がございましたらご記入ください"
              ></textarea>
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              className="w-full py-4 bg-[#d4af37] text-black font-bold text-lg rounded-lg hover:bg-[#f0c14b] transition"
            >
              予約する
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
