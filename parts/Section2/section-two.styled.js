import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  margin-bottom: 50px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme: { screen } }) => screen.medium}) {
    flex-direction: column;
  }
`;

export const RightSection = styled.div`
  max-width: 573px;
`;

export const BackDropImg = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => left && 0};
  right: ${({ right }) => right && 0};
  z-index: -5;
`;
