'use client';
import { useState } from 'react';

export default function CategoriesBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const categoriesData = [
    {
      name: "الأحذية الفاخرة",
      subcategories: ["أحذية رجالي", "أحذية حريمي", "أحذية أطفال", "أحذية رياضية"]
    },
    {
      name: "ملابس الخروج",
      subcategories: ["جاكيتات ومعاطف", "تنانير وفساتين", "ترنجات كاجوال", "قمصان وبناطيل"]
    },
    {
      name: "الملابس الداخلية القطنية",
      subcategories: ["ملابس داخلية رجالي", "ملابس داخلية حريمي", "ملابس أطفال قطنية", "بيجامات البيت"]
    },
    {
      name: "أزياء الأطفال العصرية",
      subcategories: ["أولاد (مواليد وأطفال)", "بنات (مواليد وأطفال)", "ملابس أطفال قطيفة", "أطقم الخروج للأطفال"]
    },
    {
      name: "الموضة النسائية",
      subcategories: ["أطقم كاجوال", "سواريهات ومناسبات", "عبايات وملابس بيتي", "إكسسوارات نسائية"]
    },
    {
      name: "الأناقة الرجالية",
      subcategories: ["بدلات رسمية", "قمصان كلاسيك وكاجوال", "سويت شيرت وهوديز", "بنطلونات وجينز"]
    }
  ];

  return (
    <div className="w-full bg-lime-400 py-3.5 px-4 shadow-inner relative z-50" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 lg:gap-10 text-gray-900 font-extrabold text-sm sm:text-base">
        {categoriesData.map((cat, index) => (
          <div 
            key={index} 
            className="relative group cursor-pointer py-1"
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {/* القسم الرئيسي */}
            <div className="flex items-center gap-1.5 hover:text-emerald-900 transition-colors">
              {cat.name} <span className="text-xs opacity-75">›</span>
            </div>

            {/* القائمة المنسدلة مضبوطة وثابتة تحت القسم مباشرة */}
            {activeDropdown === index && (
              <div className="absolute top-full left-0 w-60 bg-black text-white rounded-2xl shadow-2xl py-3 mt-1.5 border border-zinc-800 flex flex-col z-50">
                <div className="px-4 py-1.5 mb-1 border-b border-zinc-800 text-xs text-amber-400 font-bold text-center">
                  أقسام {cat.name}
                </div>
                {cat.subcategories.map((sub, subIdx) => (
                  <span 
                    key={subIdx} 
                    className="px-4 py-2.5 text-sm text-gray-200 hover:bg-zinc-800 hover:text-amber-400 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    {sub}
                    <span className="text-xs text-zinc-500">←</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}