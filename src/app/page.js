import { Footer, Header } from "./components";
import { HeroSec } from "./sections";
import "@/app/styles/pages/home.scss"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSec />
      </main>
      <Footer />
    </>
  );
}
