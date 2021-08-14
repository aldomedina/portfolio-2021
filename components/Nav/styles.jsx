import styled from 'styled-components';

export const SNav = styled.nav`
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightgrey};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const SButton = styled.button`
  width: 100%;
`;
