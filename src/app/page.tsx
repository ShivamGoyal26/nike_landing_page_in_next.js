import Nav from "@/components/Nav";
import {
  CustomReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "@/sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>

      <div className="bg-coral-red p-4 flex justify-center font-montserrat text-white">
        Thanks for visting!
      </div>
    </main>
  );
};

export default App;
