export default function CategoryCards() {
  const cards = [
    {
      id: 1,
      title: "الأحذية الفاخرة",
      subtitle: "راحة وأناقة لكل خطوة",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "ملابس الخروج",
      subtitle: "أحدث صيحات الموضة العصرية",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "أزياء الأطفال والعائلة",
      subtitle: "تشكيلة متميزة لكل أفراد الأسرة",
      image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&auto=format&fit=crop&q=80", // صورة أطفال مبهجة وواضحة جداً
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8" dir="rtl">
      <div className="flex flex-col md:flex-row-reverse gap-6">
        {cards.map((card) => (
          <div key={card.id} className="relative rounded-3xl overflow-hidden shadow-lg h-72 group cursor-pointer bg-gray-900 flex-1 w-full md:w-1/3">
            {/* صورة الخلفية */}
            <img 
              src={card.image} 
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* طبقة تدرج خفيفة جداً لضمان قراءة النص بوضوح من غير ما تغمء الصورة */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* محتوى الكارت */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
              <div>
                <span className="bg-amber-400 text-gray-900 text-xs font-extrabold px-3 py-1.5 rounded-full shadow">
                  تشكيلة حصرية
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-1 drop-shadow-md">{card.title}</h3>
                <p className="text-sm text-gray-100 mb-3 drop-shadow">{card.subtitle}</p>
                <span className="inline-flex items-center text-xs font-bold bg-amber-400 text-gray-900 px-4 py-2 rounded-full hover:bg-amber-300 transition-colors shadow-md">
                  تصفح القسم ←
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}