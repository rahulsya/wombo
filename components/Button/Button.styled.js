import styled from "styled-components";

export const BtnAction = styled.button`
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  color: ${({ primary, theme }) =>
    primary ? theme.mutedLight : theme.primary};
  background: ${({ primary, theme }) =>
    primary ? theme.primary : theme.primaryLight};
  font-weight: bold;
  font-size: 16px;
  margin-right: 15px;
  cursor: pointer;

  div {
    padding-right: 15px;
  }
`;
