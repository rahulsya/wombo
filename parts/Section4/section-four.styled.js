import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.dark};
  transform: skew(0, -3deg);
  padding: 100px 0;
`;

export const Content = styled.div`
  transform: skew(0, 3deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 100px;
  border: none;
  color: ${({ theme }) => theme.primary};
  background: rgba(59, 130, 246, 0.1);
  padding: 10px 20px;

  font-size: ${({ theme: { fontSize } }) => fontSize.base};
  font-weight: 700;
  text-transform: uppercase;
`;

export const TitleWrapper = styled.div`
  max-width: 777px;
  text-align: center;
  color: ${({ theme }) => theme.mutedLight};
`;
