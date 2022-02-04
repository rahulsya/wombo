import Image from "next/image";
import {
  Nav,
  NavLink,
  Button,
  NavLogo,
  NavLogoText,
} from "./navigation.styled";
import { Container } from "../../styles/container.styled";
import Logo from "../../public/assets/logo.svg";
function Navigation() {
  return (
    <>
      <Container>
        <Nav>
          <NavLogo>
            <Image src={Logo} alt="WumboLogo" height={50} width={50} />
            <NavLogoText>Wumbo</NavLogoText>
          </NavLogo>
          <div>
            <NavLink active>Top</NavLink>
            <NavLink>For Everyone</NavLink>
            <NavLink>Feature</NavLink>
            <NavLink>Preview</NavLink>
            <NavLink>License</NavLink>
          </div>
          <Button>Download</Button>
        </Nav>
      </Container>
    </>
  );
}

export default Navigation;
