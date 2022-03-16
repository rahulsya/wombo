import Image from "next/image";
import { Container } from "../../styles/container.styled";
import { FlexRow, List } from "../../components";
// assets
import { ImageSectionFour, ShapeSectionFour } from "../../public/assets";
import {
  BackDropImg,
  RightSection,
  Section,
} from "../Section2/section-two.styled";

const SectionThree = () => {
  return (
    <>
      <Container>
        <Section>
          <FlexRow>
            <Image src={ImageSectionFour} alt="section three image" />
            <RightSection>
              <h1>
                Design Templates Are Highly Customizable,{" "}
                <u>it's easy to use!</u>
              </h1>
              <p>
                All design templates are ready to use, meaning you only need to
                focus on content or if necessary, adjust some properties such as
                color, font, font size and other properties to match your brand.
              </p>
              <List>
                <b>Font Family:</b> use your favorite font in the design
                template you choose. Figma has dozens of fonts, don't worry
                about font!
              </List>
              <List>
                <b>Colors:</b> adjust the color of the template design with the
                brand you have. Set a solid color or gradient, both of which are
                easy to customize.
              </List>
              <List>
                <b>Much More:</b> set more properties to suit your desires, all
                the designs own proportions optimized for social media.
              </List>
            </RightSection>
          </FlexRow>
          <BackDropImg left>
            <Image src={ShapeSectionFour} />
          </BackDropImg>
        </Section>
      </Container>
    </>
  );
};

export default SectionThree;
