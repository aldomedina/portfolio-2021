import styled from 'styled-components';
import breakpoints from '../Theme/breakpoints';

export const SNav = styled.nav`
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightgrey};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  @media ${breakpoints.sm} {
    flex-direction: column;
  }
`;

export const SP = styled.p`
  margin-bottom: 0.5rem;
  @media ${breakpoints.sm} {
    margin-bottom: 0rem;
  }
`;
