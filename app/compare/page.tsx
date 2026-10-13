import Header from '@/components/Header';
import TopTicker from '@/components/TopTicker';
import CategoriesBar from '@/components/CategoriesBar';
import Link from 'next/link';

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col" dir="rtl">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <TopTicker />
        <Header />
        <CategoriesBar />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12 flex-grow w-full text-right">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-zinc-800 transition shadow-md">
            <span>←</span> الرجوع للرئيسية
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">مقارنة المنتجات</h1>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center py-16">
          <p className="text-gray-500 text-lg mb-6">لا توجد منتجات مضافة للمقارنة حالياً.</p>
          <Link href="/" className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition">
            تصفح المنتجات للمقارنة
          </Link>
        </div>
      </div>
    </main>
  );
}