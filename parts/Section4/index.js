import { Container } from "../../styles/container.styled";
import Image from "next/image";
import {
  SectionWrapper,
  Content,
  Button,
  TitleWrapper,
} from "./section-four.styled";
// assets
import { ImageSectionFive } from "../../public/assets";

export default function SectionFour() {
  return (
    <>
      <SectionWrapper>
        <Container>
          <Content>
            {/* button */}
            <Button>preview</Button>
            <TitleWrapper>
              <h1>
                Social Feeds is a <u>Figma design template,</u> and everyone can
                use Figma!
              </h1>
            </TitleWrapper>
            <Image src={ImageSectionFive} alt="image for section five" />
            <TitleWrapper>
              <p>
                Like the demo above, you can use Social Feeds with ease, just
                need to duplicate the template design you want, design the
                content, and export!
              </p>
            </TitleWrapper>
          </Content>
        </Container>
      </SectionWrapper>
    </>
  );
}
