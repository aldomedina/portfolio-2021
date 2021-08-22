import styled from 'styled-components';
import breakpoints from '../Theme/breakpoints';

export const SPanel = styled.div`
  height: ${({ h }) => h}px;
  min-width: 50vw;
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

  height: ${({ h }) => h}px;
  overflow-y: auto;

  @media ${breakpoints.sm} {
    display: none;
  }
`;

export const SVideo = styled.video`
  max-width: 80%;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  ${({ type }) =>
    type === 'web' &&
    `
    background-origin: border-box;
    background-clip: content-box, border-box;
    border: solid 0.5rem black;
    border-radius: 1rem;
`}
`;
export const SImage = styled.img`
  max-width: ${({ mobile }) => (mobile ? '350px' : '80%')};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  ${({ type }) =>
    type === 'web' &&
    `
    background-origin: border-box;
    background-clip: content-box, border-box;
    border: solid 0.5rem black;
    border-radius: 1rem;
`}

  @media ${breakpoints.sm} {
    max-width: none;
  }
`;

export const EmptyGallery = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.3; ;
`;

export const Blank = styled.div`
  width: 100%;
  height: 100px;
`;
