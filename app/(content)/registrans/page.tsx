import Footer from '@/app/(main)/_components/Footer';
import HeadingReg from './_components/HeadingReg';
import DataReg from './_components/DataReg';

function page() {
  return (
    <main className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <HeadingReg />
        <DataReg />
      </div>
      <Footer />
    </main>
  );
}

export default page;
