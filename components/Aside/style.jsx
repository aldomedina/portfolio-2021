import styled from 'styled-components';

export const SAside = styled.aside`
  position: relative;
  flex: 1;
  color: ${({ theme }) => theme.colors.lightgrey};
  background: ${({ theme }) => theme.colors.black};
  height: ${({ h }) => h}px;

  overflow-y: auto;
  -ms-overflow-style: none !important;
  scrollbar-width: none !important;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SP = styled.p`
  transition: 0.3s ease-in-out;
  max-width: 500px;
  text-align: center;
  opacity: ${({ aboutOpen }) => (aboutOpen ? 1 : 0)};
`;
