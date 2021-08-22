import styled from 'styled-components';
import breakpoints from '../Theme/breakpoints';

export const Tag = styled.span`
  min-width: max-content;
  box-sizing: border-box;
  transition: all 0.15s ease-in-out;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 0.45rem 0.75rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.black : 'transparent')};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.white : theme.colors.black)};
  max-height: 30px;
  cursor: ${({ pointer }) => pointer && 'pointer'};
  &:hover {
    background-color: ${({ isActive, theme }) => !isActive && theme.colors.white};
    box-shadow: ${({ isActive, theme }) =>
      !isActive && `inset 0px 0px 0px .5px ${theme.colors.black}`};
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: ${({ mt, my }) => mt ?? my ?? ''};
  margin-bottom: ${({ mb, my }) => mb ?? my ?? ''};

  @media ${breakpoints.sm} {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0 0 0.5rem;
  }
`;
