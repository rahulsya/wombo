import styled from "styled-components";
export const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: ${({ theme }) => theme.dark};
  margin-bottom: 5px;
`;

export const Square = styled.div`
  width: 14px;
  height: 14px;
  padding: 0 8px;
  margin-right: 10px;
  background: ${({ theme }) => theme.primary};
`;

export const Content = styled.div`
  b {
    color: ${({ theme }) => theme.primary};
  }
`;
