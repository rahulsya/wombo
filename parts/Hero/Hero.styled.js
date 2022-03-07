import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.div``;
export const HeroLeftSide = styled.div`
  width: 537px;
  display: flex;
  flex-direction: column;
`;

export const HeroRightSide = styled.div``;

export const HeroTitle = styled.div`
  font-size: 64px;
  line-height: 72px;
  color: ${({ theme }) => theme.dark};
  margin-bottom: 20px;
  span {
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const HeroDescription = styled.div`
  line-height: 36px;
  font-size: 22px;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 40px;
`;

export const BtnActionWrapper = styled.div`
  display: flex;
`;

export const ImgBackDrop = styled.div`
  position: absolute;
  top: 0;
  /* right: 0; */
  /* width: 800px; */
  z-index: -10;
`;
