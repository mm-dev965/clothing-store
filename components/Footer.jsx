import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 text-right">
        
        {/* العمود الأول: عن المتجر (هيكون على اليمين) */}
        <div dir="rtl">
          <h3 className="text-white text-xl font-black mb-4 flex items-center justify-start gap-2" dir="ltr">
            <span>M&M Life Store</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            وجهتك الأولى لملابس العائلة، الأحذية الفاخرة، وأحدث صيحات الموضة بأسعار تنافسية وجودة لا تقبل المنافسة لجميع المحافظات.
          </p>
          <div className="flex items-center gap-3 text-amber-400 text-sm font-bold">
            <span>📞 01022877114</span>
          </div>
        </div>

        {/* العمود الثاني: الروابط السريعة */}
        <div dir="rtl">
          <h4 className="text-white text-base font-extrabold mb-4 border-b border-zinc-800 pb-2">روابط سريعة</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-lime-400 transition-colors">الرئيسية</Link></li>
            <li><Link href="/sports-shoes" className="hover:text-lime-400 transition-colors">الأحذية الفاخرة</Link></li>
            <li><Link href="/jackets" className="hover:text-lime-400 transition-colors">ملابس الخروج</Link></li>
            <li><Link href="/kids-fashion/boys" className="hover:text-lime-400 transition-colors">أزياء الأطفال العصرية</Link></li>
            <li><Link href="/about" className="hover:text-lime-400 transition-colors">من نحن</Link></li>
          </ul>
        </div>

        {/* العمود الثالث: خدمة العملاء */}
        <div dir="rtl">
          <h4 className="text-white text-base font-extrabold mb-4 border-b border-zinc-800 pb-2">خدمة العملاء والمساعدة</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-lime-400 transition-colors">سياسة الاستبدال والاسترجاع</a></li>
            <li><a href="#" className="hover:text-lime-400 transition-colors">الشحن والتوصيل لجميع المحافظات</a></li>
            <li><a href="#" className="hover:text-lime-400 transition-colors">الأسئلة الشائعة</a></li>
            <li><a href="#" className="hover:text-lime-400 transition-colors">تواصل معنا عبر واتساب</a></li>
          </ul>
        </div>

        {/* العمود الرابع: النشرة البريدية والدفع (على اليسار) */}
        <div dir="rtl">
          <h4 className="text-white text-base font-extrabold mb-4 border-b border-zinc-800 pb-2">كن على إطلاع بالجديد</h4>
          <p className="text-gray-400 text-xs mb-4">اشترك معنا ليصلك كل جديد وعروض حصرية لأسرتك.</p>
          <div className="flex gap-2 mb-6">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني" 
              className="bg-zinc-900 border border-zinc-800 text-white px-3 py-2 rounded-xl text-sm w-full focus:outline-none focus:border-lime-400 text-right"
            />
            <button className="bg-lime-400 text-gray-950 font-black px-4 py-2 rounded-xl text-sm hover:bg-lime-500 transition-colors shrink-0">
              اشتراك
            </button>
          </div>
          <div className="text-xs text-zinc-500">
            طرق الدفع: كاش عند الاستلام / محفظة إلكترونية / فودافون كاش
          </div>
        </div>

      </div>

      {/* حقوق النشر */}
      <div className="max-w-7xl mx-auto px-4 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500" dir="rtl">
        <p>جميع الحقوق محفوظة © 2026 M&M Life Store</p>
        <p className="mt-2 sm:mt-0 text-amber-400/80 font-bold">صُمم بعناية لأفخم تسوق عائلي</p>
      </div>
    </footer>
  );
}