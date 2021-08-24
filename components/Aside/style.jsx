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
  max-width: 500px;
  font-size: 2rem;
  font-weight: bold;
  margin-top: calc(70px + 1rem);
  opacity: ${({ aboutOpen }) => (aboutOpen ? 1 : 0)};

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
