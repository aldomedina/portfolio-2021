import styled from 'styled-components';

export const ProjectWrapper = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;
export const Title = styled.div`
  transition: 0.1s ease-in-out;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  padding: 1rem 0.5rem 0;
  h3 {
    font-size: 2rem;
  }
  &:hover {
    background-color: ${({ theme, isActive }) => !isActive && theme.colors.white};
  }
`;

export const SP = styled.p`
  max-width: 500px;
`;
