export default function WhyUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12" dir="rtl">
      <div className="bg-black text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* النصوص الرئيسية */}
          <div>
            <span className="bg-amber-400 text-gray-950 text-xs sm:text-sm font-black px-4 py-2 rounded-full inline-block mb-4 shadow">
              لماذا M&M ؟
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mb-5 leading-tight tracking-tight">
              تسوق بثقة مع الوكيل الحصري لملابس وعائلة مصر
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed font-medium">
              منتجات M&M الأصلية بضمان رسمي وشحن لجميع محافظات الجمهورية، مع خيارات دفع مرنة تناسب احتياج كل أسرة مصرية.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-400 text-gray-950 font-extrabold px-8 py-3.5 rounded-full hover:bg-amber-300 transition-colors text-base shadow-lg">
                تواصل معنا
              </button>
              <button className="border-2 border-white/40 text-white font-extrabold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-base">
                تسوق المنتجات
              </button>
            </div>
          </div>

          {/* كروت الميزات الأربعة السوداء */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center justify-between shadow-md hover:border-zinc-700 transition-colors">
              <span className="text-base sm:text-lg font-bold text-gray-100">الوكيل الحصري</span>
              <span className="text-emerald-400 text-2xl">🛡️</span>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center justify-between shadow-md hover:border-zinc-700 transition-colors">
              <span className="text-base sm:text-lg font-bold text-gray-100">ضمان عام كامل</span>
              <span className="text-amber-400 text-2xl">⭐</span>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center justify-between shadow-md hover:border-zinc-700 transition-colors">
              <span className="text-base sm:text-lg font-bold text-gray-100">دفع مرن وآمن</span>
              <span className="text-emerald-400 text-2xl">💳</span>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center justify-between shadow-md hover:border-zinc-700 transition-colors">
              <span className="text-base sm:text-lg font-bold text-gray-100">شحن داخل مصر</span>
              <span className="text-emerald-400 text-2xl">🚚</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}