import TopTicker from '../components/TopTicker';
import Header from '../components/Header';
import CategoriesBar from '../components/CategoriesBar';
import Banner from '../components/Banner';
import CategoryCards from '../components/CategoryCards';
import CategoryCircles from '../components/CategoryCircles';
import BestSellers from '../components/BestSellers';
import Products from '../components/Products';
import CustomerReviews from '../components/CustomerReviews';
import WhyUs from '../components/WhyUs';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="sticky top-0 z-50 w-full shadow-md bg-white">
        <TopTicker />
        <Header />
        <CategoriesBar />
      </div>
      
      <div className="pt-2">
        <Banner />
        <CategoryCards />
        <CategoryCircles />
        <BestSellers />
        <Products />
        <CustomerReviews />
        <WhyUs />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}