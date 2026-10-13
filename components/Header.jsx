'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-3 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* اللوجو (يربط بالصفحة الرئيسية) */}
        <div className="flex items-center">
          <Link href="/" className="cursor-pointer">
            <Image 
              src="/logo.png" 
              alt="M&M Life Store Logo"
              width={160}
              height={60}
              className="object-contain h-12 w-auto"
              priority
            />
          </Link>
        </div>

        {/* شريط البحث في المنتصف */}
        <div className="w-full md:w-1/2 relative">
          <input 
            type="text" 
            placeholder="ابحث عن منتجك..." 
            className="w-full py-2.5 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-emerald-600 text-right text-sm"
          />
        </div>

        {/* الأيقونات وزرار اللغة ورقم الهاتف (على اليسار) */}
        <div className="flex items-center gap-2.5 text-sm">
          <div className="bg-amber-300 text-gray-900 font-bold py-2 px-3 rounded-full shadow-sm text-xs">
            01022877114
          </div>
          
          <Link href="/account" className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 transition" title="الحساب الشخصي">
            👤
          </Link>
          
          <Link href="/cart" className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 transition relative" title="سلة الشراء">
            🛒
          </Link>
          
          <Link href="/wishlist" className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 transition" title="المفضلة">
            ❤️
          </Link>
          
          <Link href="/compare" className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 transition" title="مقارنة المنتجات">
            🔄
          </Link>

          <button className="px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-200 transition">
            EN
          </button>
          <button className="px-3 py-1.5 bg-amber-300 rounded-lg text-xs font-bold text-gray-900 hover:bg-amber-400 transition">
            ع
          </button>
        </div>

      </div>
    </header>
  );
}