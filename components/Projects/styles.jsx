import styled from 'styled-components';

export const SMain = styled.main`
  position: relative;
  flex: 1;
  max-height: ${({ h }) => h};
  overflow-y: 'auto';
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.lightgrey};
  }
`;
