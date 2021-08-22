import styled from 'styled-components';
import breakpoints from '../Theme/breakpoints';

export const SHeader = styled.header`
  width: 50%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.lightgrey};
  @media ${breakpoints.sm} {
    width: 100%;
    height: 56px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  @media ${breakpoints.sm} {
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  @media ${breakpoints.sm} {
    font-size: 1rem;
  }
`;

export const STitleWrapper = styled.div`
  @media ${breakpoints.sm} {
    display: flex;
  }
`;

export const AboutButton = styled.button`
  transition: 0.1s ease-in-out;
  color: ${({ theme }) => theme.colors.lightgrey};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
