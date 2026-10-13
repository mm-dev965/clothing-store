import Header from '@/components/Header';
import TopTicker from '@/components/TopTicker';
import CategoriesBar from '@/components/CategoriesBar';
import Link from 'next/link';

export default function MensPantsPage() {
  const products = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: `بنطلون / جينز رجالي موديل ${index + 1}`,
    price: 650 + (index * 45),
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=60"
  }));

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-right">بنطلونات وجينز رجالي</h1>
        <p className="text-gray-600 mb-8 text-right">أفضل تشكيلة بنطلونات قماش وجينز بتصميمات مريحة وعصرية.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-right flex flex-col justify-between">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h3>
              <p className="text-amber-600 font-bold mb-4">{product.price} ج.م</p>
              <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 font-semibold">أضف للسلة</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}