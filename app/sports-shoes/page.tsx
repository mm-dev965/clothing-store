import Header from '@/components/Header';
import TopTicker from '@/components/TopTicker';
import CategoriesBar from '@/components/CategoriesBar';
import Link from 'next/link';
import Image from 'next/image';

export default function SportsShoesPage() {
  // مصفوفة منتجات بصور حقيقية تجريبية
  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `حذاء رياضي احترافي موديل ${index + 1}`,
    price: 850 + (index * 50),
    image: index % 2 === 0 
      ? "https://tempo-eg.com/cdn/shop/files/Final-Side-FINAL_43423312-dbbf-430a-a561-1b0f5e881f98_2048x.jpg?v=1778937702"
      : "https://annachy-prod-assets.annachy.com/pims/products-v1/0146126DARGREPIS_2-image1_v1776251249133.webp"
  }));

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col" dir="rtl">
      {/* الهيدر والشريط الأخضر ثابتين أعلى الصفحة */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <TopTicker />
        <Header />
        <CategoriesBar />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
        {/* زر الرجوع للرئيسية */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-zinc-800 transition shadow-md"
          >
            <span>←</span> الرجوع للرئيسية
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-right">أحذية رياضية عملية</h1>
        <p className="text-gray-600 mb-8 text-right">أفضل الأحذية الرياضية للجري والتمارين بأعلى جودة وخامات مريحة.</p>
        
        {/* شبكة الـ 10 منتجات مع صور حقيقية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-right hover:shadow-lg transition flex flex-col justify-between">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h3>
              <p className="text-amber-600 font-bold mb-4">{product.price} ج.م</p>
              <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition font-semibold">
                أضف للسلة
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}