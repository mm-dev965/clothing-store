'use client';
import Link from 'next/link';

export default function CategoriesBar() {
  const categoriesData = [
    {
      name: "الأناقة الرجالية",
      subcategories: [
        { name: "بدلات رسمية", path: "/mens-elegance/suits" },
        { name: "قمصان كلاسيك وكاجوال", path: "/mens-elegance/shirts" },
        { name: "سويت شيرت وهوديز", path: "/mens-elegance/hoodies" },
        { name: "بنطلونات وجينز", path: "/mens-elegance/pants" }
      ]
    },
    {
      name: "الموضة النسائية",
      subcategories: [
        { name: "أطقم كاجوال", path: "/womens-fashion/casual" },
        { name: "سواريهات ومناسبات", path: "/womens-fashion/evening" },
        { name: "عبايات وملابس بيتي", path: "/womens-fashion/abayas-homewear" },
        { name: "إكسسوارات نسائية", path: "/womens-fashion/accessories" }
      ]
    },
    {
      name: "أزياء الأطفال العصرية",
      subcategories: [
        { name: "أولاد (مواليد وأطفال)", path: "/kids-fashion/boys" },
        { name: "بنات (مواليد وأطفال)", path: "/kids-fashion/girls" },
        { name: "ملابس أطفال قطيفة", path: "/kids-fashion/velour" },
        { name: "أطقم الخروج للأطفال", path: "/kids-fashion/outfits" }
      ]
    },
    {
      name: "الملابس الداخلية القطنية",
      subcategories: [
        { name: "ملابس داخلية رجالي", path: "/mens-underwear" },
        { name: "ملابس داخلية حريمي", path: "/womens-underwear" },
        { name: "ملابس أطفال قطنية", path: "/kids-cotton" },
        { name: "بيجامات البيت", path: "/home-pyjamas" }
      ]
    },
    {
      name: "ملابس الخروج",
      subcategories: [
        { name: "جاكيتات ومعاطف", path: "/jackets" },
        { name: "تنانير وفساتين", path: "/skirts-dresses" },
        { name: "ترنجات كاجوال", path: "/casual-tracksuits" },
        { name: "قمصان وبناطيل", path: "/shirts-pants" }
      ]
    },
    {
      name: "الأحذية الفاخرة",
      subcategories: [
        { name: "أحذية رجالي", path: "/mens-shoes" },
        { name: "أحذية حريمي", path: "/womens-shoes" },
        { name: "أحذية أطفال", path: "/kids-shoes" },
        { name: "أحذية رياضية", path: "/sports-shoes" }
      ]
    }
  ];

  return (
    <div className="w-full bg-lime-400 py-3 px-4 shadow-inner relative z-50" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 lg:gap-10 text-gray-900 font-extrabold text-sm sm:text-base">
        {categoriesData.map((cat, index) => (
          <div key={index} className="relative group cursor-pointer py-1">
            {/* القسم الرئيسي */}
            <div className="flex items-center gap-1.5 hover:text-emerald-900 transition-colors">
              {cat.name} <span className="text-xs opacity-75">›</span>
            </div>

            {/* القائمة المنسدلة */}
            <div className="absolute top-full right-0 w-60 bg-black text-white rounded-2xl shadow-2xl py-3 mt-1.5 border border-zinc-800 flex flex-col z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="px-4 py-1.5 mb-1 border-b border-zinc-800 text-xs text-amber-400 font-bold text-center">
                أقسام {cat.name}
              </div>
              {cat.subcategories.map((sub, subIdx) => (
                <Link
                  key={subIdx}
                  href={sub.path}
                  prefetch={true}
                  className="px-4 py-2.5 text-sm text-gray-200 hover:bg-zinc-800 hover:text-amber-400 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{sub.name}</span>
                  <span className="text-xs text-zinc-500">←</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}