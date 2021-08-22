import styled from 'styled-components';
import breakpoints from '../Theme/breakpoints';
export const SMain = styled.main`
  transition: height 0.2s ease-in-out;
  position: relative;
  flex: 1;
  max-height: ${({ h }) => h};
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.lightgrey};
  }

  @media ${breakpoints.sm} {
    flex: none;
    height: ${({ isOpen, h }) => (isOpen ? h - 56 : 37)}px;
  }
`;
