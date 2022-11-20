import { Navigation } from "../components";
import {
  Hero,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
} from "../parts";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      {/* content section1 */}
      <SectionOne />
      {/* content section2 */}
      <SectionTwo />
      {/* content Section3 */}
      <SectionThree />
      {/* content section4 */}
      <SectionFour />
    </>
  );
}
