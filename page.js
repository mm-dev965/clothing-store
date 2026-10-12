export default function Home() {
  const products = [
    { id: 1, name: 'هودي كاجوال حريمي', price: '450 ج.م', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigUPQgvKuR_2SYMYXlH8SB20Jd-1fna9lEr6xdyWdCmvsOP-EVsWUHKuOrzCY8vS66gkjg5pCOezryBe654sZYhZ7R2Vv2l/s1600/1.jpg' },
    { id: 2, name: 'هودي كاجوال رجالي', price: '500 ج.م', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsE2xl/AVvXseiwvagtFREFmI87iIbxTU_mep11Duao-2dAX8k5iS7_I34e6YMXcnsM9SHcwFFLzzMj11vpr0EIffrHQaHG_XADSIqp6u_1.jpg' },
    { id: 3, name: 'هودي اطفال اولاد', price: '300 ج.م', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiL7Y-USEL-sLsaXP5tmPAZZ8OlR6zpFYle3HEOrLM-U3TWiMN34BXhOL_kgFvSOn8FchXBc8rmoB1TLEqD4mV-RA4Qz2N3_1.jpg' },
    { id: 4, name: 'هودي اطفال بنات', price: '2500 ج.م', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgb4UtyBNVX-8c4KDZHPxw-1QmiCPcbEvAllIQd6LVu4pkljtSBpMyEMfBAst8sUSY5PTv19id9NxWqriQFlvQSEFaQ_1.jpg' },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50 p-4 flex justify-between items-center px-8">
        <h1 className="text-xl font-bold text-gray-800">موضة ستور 👕</h1>
        <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">أحدث العروض</span>
      </header>

      <section className="bg-indigo-600 text-white text-center py-12 px-4 shadow-inner">
        <h2 className="text-3xl font-bold mb-2">أهلاً بك في متجرنا للملابس العصرية</h2>
        <p className="text-indigo-100">تسوق الآن أفضل تشكيلة شتوية بأفضل الأسعار!</p>
      </section>

      <main className="max-w-6xl mx-auto p-6">
        <h3 className="text-2xl font-bold mb-6 text-gray-800 border-r-4 border-indigo-600 pr-3">منتجاتنا المميزة</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
              <div className="h-56 bg-gray-100 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg text-gray-800 mb-1">{product.name}</h4>
                <p className="text-indigo-600 font-bold text-lg mb-4">{product.price}</p>
                <a 
                  href={`https://wa.me/201234567890?text=مرحباً، أريد طلب منتج: ${product.name} بسعر ${product.price}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-medium text-sm"
                >
                  اطلب الآن عبر واتساب
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}