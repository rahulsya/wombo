import styled from "styled-components";

export const Section = styled.section`
  position: relative;
`;

export const Title = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;

  p {
    color: ${({ theme }) => theme.dark};
    max-width: 574px;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 5rem;
`;

export const Card = styled.div`
  background: ${({ theme, primary }) => (primary ? theme.dark : "")};
  color: ${({ theme, primary }) => (primary ? theme.mutedLight : theme.dark)};
  border-radius: 10px;
  width: 373px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* shadow */
  box-shadow: ${({ primary }) =>
    primary && `0px 30px 60px rgba(25, 55, 102, 0.25)`};

  b {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme, primary }) =>
      primary ? theme.mutedLight : theme.muted};
  }
`;

export const ImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme, primary }) =>
    primary ? `rgba(255, 255, 255, 0.08)` : theme.dark};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  /* box shadow */
  box-shadow: ${({ primary }) =>
    !primary && `0px 30px 60px rgba(25, 55, 102, 0.25)`};
`;

export const ImgBackDrop = styled.div`
  position: absolute;
  top: 0;
  left: -50px;
  z-index: -10;
`;
