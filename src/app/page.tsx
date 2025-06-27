import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Services } from "./_components/services";
import { Starter } from "./_components/starter";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <main>
      <Starter />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )

}