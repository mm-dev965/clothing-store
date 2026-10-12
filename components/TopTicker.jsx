'use client';

export default function TopTicker() {
  const tickerItems = [
    "🏷️ أسعار تنافسية وعروض مميزة",
    "🛡️ ضمان علي المنتجات",
    "🔒 دفع أمن ومضمون 100%",
    "⭐ منتجات عالية الجودة",
    "📞 خدمة عملاء متميزة",
    "🚚 توصيل سريع لجميع المحافظات",
    "✨ متجر M&M غاية الامان"
  ];

  return (
    <div className="w-full bg-black text-white py-3 overflow-hidden relative shadow-sm" dir="rtl">
      <div className="flex whitespace-nowrap animate-marquee items-center text-base sm:text-lg font-bold">
        {tickerItems.map((item, index) => (
          <span key={index} className="mx-10 inline-flex items-center">
            {item}
          </span>
        ))}
        {/* تكرار العناصر لضمان استمرارية الشريط المتحرك بدون فواصل */}
        {tickerItems.map((item, index) => (
          <span key={`dup-${index}`} className="mx-10 inline-flex items-center">
            {item}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          /* زوّدنا المدة إلى 35 ثانية عشان الحركة تبطء وتبقى ناعمة جداً */
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}