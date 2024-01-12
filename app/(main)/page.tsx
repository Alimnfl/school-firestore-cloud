import Footer from './_components/Footer';
import Heading from './_components/Heading';
import HeroSection from './_components/HeroSection';

export default function Home() {
  return (
    <main className="min-h-full flex flex-col">
      <div className="flex flex-col items-center md:justify-center justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <HeroSection />
      </div>
      <Footer />
    </main>
  );
}
