import styled from "styled-components";

export const FlexContainer = styled.div`
  position: relative;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme: { screen } }) => screen.medium}) {
    flex-direction: column;
  }
`;
