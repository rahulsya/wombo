import Image from "next/image";
import ToolIcon from "../../public/assets/icons/toolIcon.svg";
import CodeIcon from "../../public/assets/icons/codeIcon.svg";
import MarketIcon from "../../public/assets/icons/marketIcon.svg";
import { ShapeSectionTwo } from "../../public/assets";

// styled
import { Container } from "../../styles/container.styled";
import {
  Section,
  Title,
  CardWrapper,
  Card,
  ImageWrapper,
  ImgBackDrop,
} from "./Section-one.styled";
export default function SectionOne() {
  return (
    <>
      <Container>
        <Section>
          <Title>
            <p>
              Figma Social Feeds is designed for everyone. Use for whatever you
              want, it’s completely free!
            </p>
          </Title>

          <CardWrapper>
            <Card primary>
              <ImageWrapper primary>
                <Image src={ToolIcon} />
              </ImageWrapper>
              <b>For designer</b>
              <p>
                Busy designers want to share insights, such as tips, tricks or
                other types of insights. Focus on content not on design.
              </p>
            </Card>
            <Card>
              <ImageWrapper>
                <Image src={CodeIcon} />
              </ImageWrapper>
              <b>For Coder</b>
              <p>
                Coders who want to share snippets, tools, or tips and tricks. No
                design skills required: just duplicate, edit and export!
              </p>
            </Card>
            <Card>
              <ImageWrapper>
                <Image src={MarketIcon} />
              </ImageWrapper>
              <b>For Marketer</b>
              <p>
                Promote the product in an elegant and attractive way to get more
                attention from potential customers. Just duplicate and export!
              </p>
            </Card>
          </CardWrapper>

          <ImgBackDrop>
            <Image src={ShapeSectionTwo} />
          </ImgBackDrop>
        </Section>
      </Container>
    </>
  );
}
