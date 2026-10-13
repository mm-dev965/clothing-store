import Header from '@/components/Header';
import TopTicker from '@/components/TopTicker';
import CategoriesBar from '@/components/CategoriesBar';
import Link from 'next/link';

export default function MensShoesPage() {
  const products = [
    { id: 1, name: "حذاء رجالي كلاسيكي موديل 1", price: 900, image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop&q=80" },
    { id: 2, name: "حذاء رجالي كلاسيكي موديل 2", price: 1000, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80" },
    { id: 3, name: "حذاء رجالي كلاسيكي موديل 3", price: 1100, image: "https://images.unsplash.com/photo-1533867617858-e7d97e0afd8b?w=600&auto=format&fit=crop&q=80" },
    { id: 4, name: "حذاء رجالي كلاسيكي موديل 4", price: 1200, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80" },
    { id: 5, name: "حذاء رجالي كلاسيكي موديل 5", price: 1300, image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&auto=format&fit=crop&q=80" },
    { id: 6, name: "حذاء رجالي كلاسيكي موديل 6", price: 1400, image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop&q=80" },
    { id: 7, name: "حذاء رجالي كلاسيكي موديل 7", price: 1500, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80" },
    { id: 8, name: "حذاء رجالي كلاسيكي موديل 8", price: 1600, image: "https://images.unsplash.com/photo-1533867617858-e7d97e0afd8b?w=600&auto=format&fit=crop&q=80" },
    { id: 9, name: "حذاء رجالي كلاسيكي موديل 9", price: 1700, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80" },
    { id: 10, name: "حذاء رجالي كلاسيكي موديل 10", price: 1800, image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&auto=format&fit=crop&q=80" }
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col" dir="rtl">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <TopTicker />
        <Header />
        <CategoriesBar />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-zinc-800 transition shadow-md">
            <span>←</span> الرجوع للرئيسية
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-right">الأحذية الرجالية الفاخرة</h1>
        <p className="text-gray-600 mb-8 text-right">أرقى تشكيلة من الأحذية الرجالية الكلاسيكية والفاخرة.</p>
        
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
              <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition font-semibold">أضف للسلة</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}