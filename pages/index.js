import { Navigation, Header } from "../components";
import { Hero, SectionOne, SectionTwo } from "../parts";
export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <Hero />
      {/* content section1 */}
      <SectionOne />
      {/* content section2 */}
      <SectionTwo />
    </>
  );
}
