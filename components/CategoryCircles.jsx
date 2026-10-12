export default function CategoryCircles() {
  const categories = [
    { id: 1, name: "الأحذية الفاخرة", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80" },
    { id: 2, name: "ملابس الخروج", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&auto=format&fit=crop&q=80" },
    { id: 3, name: "الملابس الداخلية", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&auto=format&fit=crop&q=80" },
    { id: 4, name: "أزياء الأطفال", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&auto=format&fit=crop&q=80" },
    { id: 5, name: "الموضة النسائية", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=80" },
    { id: 6, name: "الأناقة الرجالية", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&auto=format&fit=crop&q=80" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12" dir="rtl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">تسوق حسب التصنيف</h2>
        <p className="text-gray-500 text-sm">يمكنك الوصول إلى المنتج الذي تريده عن طريق الضغط على القسم الذي ينتمي اليه</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center group cursor-pointer">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-gray-100 shadow-md group-hover:border-lime-400 group-hover:scale-105 transition-all duration-300">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="mt-3 font-bold text-gray-800 text-sm sm:text-base group-hover:text-lime-600 transition-colors text-center">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}