export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6" dir="rtl">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* البانر الرئيسي الكبير (أخذ 3 أعمدة) */}
        <div className="lg:col-span-3 bg-gray-900 rounded-3xl overflow-hidden shadow-md relative min-h-[420px] sm:min-h-[460px] flex items-center">
          {/* صورة خلفية شاملة ومعبرة عن تشكيلة الأزياء العائلية */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80" 
              alt="تشكيلة M&M Life Store الشاملة"
              className="w-full h-full object-cover opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* محتوى البانر */}
          <div className="relative z-10 p-8 sm:p-12 text-white max-w-xl">
            <span className="bg-amber-400 text-gray-900 text-xs font-extrabold px-3 py-1.5 rounded-full inline-block mb-4">
              ✨ تشكيلة شتاء 2026 الفاخرة
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
              أناقة العائلة تبدأ من هنا
            </h2>
            <p className="text-base sm:text-lg text-gray-200 mb-6 font-medium leading-relaxed">
              اكتشف الآن أحدث موديلات ملابس الأطفال، الرجالي، الحريمي، الخروج، والأحذية بجودة عالمية وأسعار لا تقبل المنافسة.
            </p>
            <button className="bg-amber-400 text-gray-900 font-bold px-8 py-3.5 rounded-full hover:bg-amber-300 transition-colors shadow-lg text-sm sm:text-base">
              اكتشف التشكيلة الآن
            </button>
          </div>
        </div>

        {/* مربعات الضمان والشحن الجانبية (أخذت عمود واحد وتم تكبيرها لتتطابق مع طول البانر) */}
        <div className="lg:col-span-1 flex flex-col justify-between gap-4">
          
          {/* كارت الضمان */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm flex flex-col justify-center items-center text-center flex-grow hover:shadow-md transition-all">
            <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-2xl font-extrabold text-xl flex items-center justify-center shadow-inner mb-3">
              🛡️
            </div>
            <h3 className="font-extrabold text-gray-900 text-lg mb-1">ضمان لمدة عام</h3>
            <p className="text-gray-500 text-xs font-medium">راحة بالك ... تهمنا بكافة المنتجات</p>
          </div>

          {/* كارت الشحن المجاني */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm flex flex-col justify-center items-center text-center flex-grow hover:shadow-md transition-all">
            <div className="bg-emerald-100 text-emerald-800 w-16 h-16 rounded-2xl text-3xl flex items-center justify-center shadow-inner mb-3">
              🚚
            </div>
            <h3 className="font-extrabold text-gray-900 text-lg mb-1">شحن سريع ومجاني</h3>
            <p className="text-gray-500 text-xs font-medium">اطلب الآن والشحن لجميع المحافظات</p>
          </div>

        </div>

      </div>
    </section>
  );
}