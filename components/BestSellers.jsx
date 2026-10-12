export default function BestSellers() {
  const products = [
    {
      id: 1,
      name: "سويت شيرت كلاسيك عصري رجالي",
      price: "550 جنيه",
      oldPrice: "750 جنيه",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&auto=format&fit=crop&q=80",
      tag: "الأعلى رتبة"
    },
    {
      id: 2,
      name: "طقم أطفال قطيفة عالي الجودة",
      price: "450 جنيه",
      oldPrice: "600 جنيه",
      image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&auto=format&fit=crop&q=80",
      tag: "حصري"
    },
    {
      id: 3,
      name: "ترنج كاجوال شتوي راقي للأسرة",
      price: "650 جنيه",
      oldPrice: "900 جنيه",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=80",
      tag: "خصم 25%"
    },
    {
      id: 4,
      name: "حذاء رياضي فاخر - M&M Original",
      price: "850 جنيه",
      oldPrice: "1150 جنيه",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80",
      tag: "الأكثر طلباً"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12" dir="rtl">
      {/* العنوان وزر عرض الكل */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <span className="text-lime-700 font-extrabold text-xs sm:text-sm bg-lime-100 px-3 py-1 rounded-full inline-block mb-2">تشكيلة مميزة</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">الأكثر مبيعاً في متجرنا</h2>
        </div>
        <button className="text-sm font-extrabold text-gray-900 hover:text-emerald-700 transition-colors bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl">
          عرض الكل ←
        </button>
      </div>

      {/* شبكة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group text-right">
            <div>
              <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <span className="absolute top-3 right-3 bg-black text-amber-400 text-xs font-black px-3 py-1 rounded-full z-10 shadow">
                  {item.tag}
                </span>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-3 group-hover:text-emerald-700 transition-colors leading-snug">
                {item.name}
              </h3>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-black text-gray-950">{item.price}</span>
                <span className="text-sm text-gray-400 line-through font-medium">{item.oldPrice}</span>
              </div>
              <button className="w-full bg-black text-amber-400 font-extrabold py-3 rounded-2xl hover:bg-zinc-900 transition-colors text-sm shadow flex items-center justify-center gap-2">
                <span>إضافة إلى السلة</span> 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}