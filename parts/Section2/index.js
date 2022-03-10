import { Container } from "../../styles/container.styled";
import {
  Section,
  SectionWrapper,
  RightSection,
  BackDropImg,
} from "./section-two.styled";
import { List } from "../../components";
import Image from "next/image";
import { ImgSectionTwo, ShapeSection3 } from "../../public/assets";

const SectionTwo = () => {
  return (
    <Container>
      <Section>
        <SectionWrapper>
          <RightSection>
            <h1>
              There are <u>80+ Pre-Designed</u> Templates Ready to Use
            </h1>
            <p>
              Many design choices make it free for you to make a different
              design every time you post. There are 80+ designs with 10+
              different layouts. Each layout has several designs with the same
              theme, just need to focus on the content!
            </p>
            <List>
              <b>Insights:</b> create content that contains insights on design,
              coding, or recommendations for the best tourist attractions.
            </List>
            <List>
              <b>Promotions:</b>
              get more potential customers by making product or service
              promotions in a more attractive way.
            </List>
            <List>
              <b>Much More:</b> design more types of content with Social Feeds
              and increase followers on your social media accounts.
            </List>
          </RightSection>
          <Image src={ImgSectionTwo} alt="Img_sec2" />
        </SectionWrapper>
        <BackDropImg>
          <Image src={ShapeSection3} />
        </BackDropImg>
      </Section>
    </Container>
  );
};

export default SectionTwo;
