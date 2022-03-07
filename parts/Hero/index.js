import { Container } from "../../styles/container.styled";
import Image from "next/image";
import HeroImg from "../../public/assets/HeroImg.png";
import BackDropHero from "../../public/assets/backdropHero.png";
import {
  HeroWrapper,
  HeroTitle,
  HeroDescription,
  HeroLeftSide,
  ImgBackDrop,
  BtnActionWrapper,
  HeroRightSide,
} from "./Hero.styled";
import { Button } from "../../components";
export default function Hero() {
  return (
    <>
      <Container>
        <HeroWrapper>
          <HeroLeftSide>
            <HeroTitle>
              Beautiful Design For <span>Social Media</span> Content
            </HeroTitle>
            <HeroDescription>
              Figma social media content templates for branding, marketing,
              insights, and more. Free for personal and commercial use!
            </HeroDescription>
            <BtnActionWrapper>
              <Button primary text="Download Now" />
              <Button text="See in Action" />
            </BtnActionWrapper>
          </HeroLeftSide>
          <HeroRightSide>
            <Image src={HeroImg} alt="hero image" width={583} height={582} />
            <ImgBackDrop>
              <Image
                src={BackDropHero}
                alt="back drop img"
                width={689}
                height={869}
                draggable="false"
              />
            </ImgBackDrop>
          </HeroRightSide>
        </HeroWrapper>
      </Container>
    </>
  );
}
