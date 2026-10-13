import Header from '@/components/Header';
import TopTicker from '@/components/TopTicker';
import CategoriesBar from '@/components/CategoriesBar';
import Link from 'next/link';

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col" dir="rtl">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <TopTicker />
        <Header />
        <CategoriesBar />
      </div>
      <div className="max-w-md mx-auto px-4 py-12 flex-grow w-full text-right">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-zinc-800 transition shadow-md">
            <span>←</span> الرجوع للرئيسية
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">حسابي الشخصي</h1>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">البريد الإلكتروني</label>
            <input type="email" placeholder="name@example.com" className="w-full p-3 border rounded-xl text-right text-sm" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">كلمة المرور</label>
            <input type="password" placeholder="••••••••" className="w-full p-3 border rounded-xl text-right text-sm" />
          </div>
          <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition">
            تسجيل الدخول
          </button>
        </div>
      </div>
    </main>
  );
}