import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import { Feedbacks } from "./_components/feedbacks";
import { Footer } from "./_components/footer";
import { Team } from "./_components/team";
import { Address } from "./_components/address";
import { Navigator } from "./_components/navigator";

export default function Home() {
  return (
    <main>
      <Navigator />
      <Hero />
      <About />
      <Services />
      <Team />
      <Feedbacks />
      <Address />
      <Footer />
    </main>
  );
}
