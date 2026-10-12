import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* الأيقونات وزرار اللغة ورقم الهاتف (على الشمال) */}
        <div className="flex items-center gap-2.5 order-3 md:order-1 text-sm">
          <div className="bg-amber-300 text-gray-900 font-bold py-2 px-3 rounded-full shadow-sm text-xs">
            01022877114
          </div>
          <button className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700" title="الحساب الشخصي">
            👤
          </button>
          <button className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700" title="سلة الشراء">
            🛒
          </button>
          <button className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700" title="المفضلة">
            ❤️
          </button>
          <button className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700" title="مقارنة المنتجات">
            🔄
          </button>
          <button className="px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-200">
            EN
          </button>
          <button className="px-3 py-1.5 bg-amber-300 rounded-lg text-xs font-bold text-gray-900 hover:bg-amber-400">
            ع
          </button>
        </div>

        {/* شريط البحث في المنتصف */}
        <div className="w-full md:w-1/2 order-2 md:order-2 relative">
          <input 
            type="text" 
            placeholder="ابحث عن منتجك..." 
            className="w-full py-2.5 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-emerald-600 text-right text-sm"
          />
        </div>

        {/* لوجو المتجر (على اليمين) */}
        <div className="order-1 md:order-3 flex items-center">
          <Image 
            src="/logo.png" 
            alt="M&M Life Store Logo"
            width={160}
            height={60}
            className="object-contain h-12 w-auto"
            priority
          />
        </div>

      </div>
    </header>
  );
}