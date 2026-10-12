export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "سارة محمد",
      rating: "⭐⭐⭐⭐⭐",
      comment: "الجودة عالية جداً والخامات ممتازة والسعر مناسب جداً لكل أسرة.",
      product: "ترنج كاجوال نسائي",
      verified: "عميل مميز"
    },
    {
      id: 2,
      name: "محمود أحمد",
      rating: "⭐⭐⭐⭐⭐",
      comment: "منتجات أصلية وتوصيل سريع جداً، تجربة ممتازة وتستحق كل جنيه.",
      product: "حذاء رياضي فاخر وسويت شيرت",
      verified: "عميل مميز"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12" dir="rtl">
      {/* العنوان العلوي */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-black text-white p-8 sm:p-10 rounded-3xl shadow-lg">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-amber-400 font-extrabold text-lg">★ 4.9</span>
            <span className="text-gray-300 text-sm font-medium">أكثر من ألفي عملاء وثقوا فينا</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">آراء عملاء M&M Life Store المميزين</h2>
        </div>
      </div>

      {/* شبكة الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((rev) => (
          <div key={rev.id} className="bg-white border border-gray-200 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              {/* بيانات العميل والتقييم */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-lime-400 text-gray-950 font-black flex items-center justify-center text-lg shadow-sm">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-base">{rev.name}</h4>
                    <span className="bg-lime-100 text-lime-900 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full inline-block mt-0.5">
                      {rev.verified}
                    </span>
                  </div>
                </div>
                <div className="text-amber-400 text-sm tracking-widest">{rev.rating}</div>
              </div>

              {/* النص */}
              <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed font-medium">
                "{rev.comment}"
              </p>
            </div>
            
            {/* تفاصيل المنتج الأسفل */}
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl flex flex-wrap justify-between items-center text-xs sm:text-sm">
              <span className="text-gray-500">المنتج: <strong className="text-gray-900 font-bold">{rev.product}</strong></span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-lg">ضمان استبدال واسترجاع 14 يوم</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}