import Header from '@/components/Header';
import TopTicker from '@/components/TopTicker';
import CategoriesBar from '@/components/CategoriesBar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
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
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">من نحن - M&M Life Store</h1>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-4 text-gray-700 leading-relaxed text-lg">
          <p>
            مرحباً بك في <strong className="text-emerald-700">M&M Life Store</strong>، وجهتك الأولى للتسوق الإلكتروني الراقي والمتميز في مصر. نحن نؤمن بأن الأناقة والجودة يجب أن تكون في متناول الجميع.
          </p>
          <p>
            نقدم تشكيلة واسعة وعصرية مختارة بعناية فائقة لتلبي احتياجات كل أفراد العائلة؛ بدءاً من الأحذية الفاخرة، مروراً بملابس الخروج والملابس القطنية، وصولاً إلى أحدث صيحات الموضة للأطفال والنساء والأرجال.
          </p>
          <p>
            هدفنا الأساسي هو تقديم تجربة تسوق آمنة، مريحة، وبأسعار تنافسية مع خدمة عملاء استثنائية وتوصيل سريع لجميع المحافظات.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}