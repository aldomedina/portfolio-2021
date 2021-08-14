import styled from 'styled-components';

export const SPanel = styled.div`
  height: ${({ h }) => h}px;
  overflow-y: auto;
  position: absolute;
  display: grid;
  justify-items: center;
  gap: 2rem;
  padding: ${({ theme }) => `calc(1rem + 70px) ${theme.spacing}`};

  top: 0;
  left: 0;
  transition: all 0.12s ease-in-out;
  transform: ${({ isOpen }) => `translate3d(${isOpen ? '0%' : '-100%'}, 0,0)`};
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const SImage = styled.img`
  max-width: 80%;
  ${({ type }) =>
    type === 'web' &&
    `
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
    background-origin: border-box;
    background-clip: content-box, border-box;
    border: solid 0.5rem black;
    border-radius: 1rem;
`}
`;
