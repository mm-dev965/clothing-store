export default function Products() {
  const products = [
    { id: 1, name: "ترنج رجالي خروج شتوي فاخر", price: "450 ج.م", category: "الأناقة الرجالية", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=80" },
    { id: 2, name: "طقم نسائي كاجوال راقي", price: "550 ج.م", category: "الموضة النسائية", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80" },
    { id: 3, name: "سويت شيرت أطفال قطن ناعم", price: "300 ج.م", category: "أزياء الأطفال", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&auto=format&fit=crop&q=80" },
    { id: 4, name: "حذاء رياضي أنيق ومريح", price: "650 ج.م", category: "الأحذية الفاخرة", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80" },
    { id: 5, name: "طقم ملابس داخلية قطن 100%", price: "200 ج.م", category: "الملابس الداخلية", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=80" },
    { id: 6, name: "جاكيت خروج شتوي عصري", price: "850 ج.م", category: "ملابس الخروج", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=80" },
    { id: 7, name: "حذاء أطفال كيوت ومرن", price: "350 ج.م", category: "الأحذية الفاخرة", image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500" },
    { id: 8, name: "بيجامات أطفال قطيفة دافئة", price: "250 ج.م", category: "أزياء الأطفال", image: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=500" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12" dir="rtl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 border-r-4 border-emerald-600 pr-3">
          تشكيلة M&M Life Store المميزة
        </h2>
        <span className="text-emerald-700 font-bold cursor-pointer hover:underline text-sm">
          عرض الكل ›
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="h-56 w-full overflow-hidden bg-gray-100 relative">
              <span className="absolute top-2 right-2 bg-black/75 text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10">
                {product.category}
              </span>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow justify-between">
              <h3 className="font-bold text-gray-800 text-base mb-2">{product.name}</h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-emerald-700 font-extrabold text-lg">{product.price}</span>
                <button className="bg-emerald-600 text-white text-xs font-bold py-2 px-4 rounded-full hover:bg-emerald-700 transition-colors">
                  أضف للسلة
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}