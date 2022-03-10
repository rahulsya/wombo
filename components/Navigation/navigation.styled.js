import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  /* background: ${({ theme }) => theme.primaryLight}; */
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLogoText = styled.p`
  padding-left: 12px;
  font-weight: bold;
  font-size: 18px;
`;

export const NavLinkWrapper = styled.div`
  display: block;

  @media (max-width: ${({ theme: { screen } }) => screen.medium}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? "bold" : "regular")};
  color: ${({ theme, active }) => (active ? theme.dark : theme.muted)};
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 10px 25px;
  background: ${({ theme }) => theme.mutedLight};
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-radius: 6px;
`;
