import styled from 'styled-components';
import breakpoints from '../Theme/breakpoints';

export const SAside = styled.aside`
  position: relative;
  flex: 1;
  color: ${({ theme }) => theme.colors.lightgrey};
  background: ${({ theme }) => theme.colors.black};
  overflow: hidden;
`;

export const SP = styled.p`
  transition: 0.3s ease-in-out;
  max-width: calc(50vw - 4rem);
  font-size: 2rem;
  font-weight: 500;
  margin-top: calc(70px + 1rem);

  @media ${breakpoints.sm} {
    margin-top: calc(35px + 1rem);
    font-size: 1.25rem;
  }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`;

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing};
  position: relative;
  z-index: 2;
  opacity: ${({ aboutOpen }) => (aboutOpen ? 1 : 0)};
  pointer-events: ${({ aboutOpen }) => (aboutOpen ? 'visible' : 'none')};
`;
