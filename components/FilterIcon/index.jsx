import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../../pages';

const Wrapper = styled.div`
  position: relative;
  width: 21px;
  height: 21px;
  span {
    position: absolute;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: 0.15s ease-in-out;
  }
`;

const LG = styled.span`
  width: 21px;
  top: 0;
  left: 0;
  transform-origin: top left;
  transform: ${({ isOpen }) => isOpen && `rotate(45deg) translate3d(.5px, -.5px, 0px)`};
`;

const MD = styled.span`
  width: 13px;
  top: 6px;
  left: 4px;
  transform: ${({ isOpen }) => isOpen && `translate3d(-6px, 4px, 0) rotate(-45deg)`};
`;

const SM = styled.span`
  width: 8px;
  top: 12px;
  left: 7px;
  transform-origin: right;
  transform: ${({ isOpen }) => isOpen && `translate3d(-.3px,-12.1px,0) rotate(-45deg)`};
`;

const SCounter = styled.span`
  top: -5px;
  left: 10px;
  height: 15px !important;
  width: 15px;
  background-color: black;
  color: ${({ theme }) => theme.colors.lightgrey};
  border-radius: 100px;
  font-size: 0.8rem;
`;

const FiltersIcon = ({ isOpen }) => {
  const { activeFilters } = useContext(AppContext);
  return (
    <Wrapper>
      <LG isOpen={isOpen} />
      <MD isOpen={isOpen} />
      <SM isOpen={isOpen} />
      {!!activeFilters.length && <SCounter>{activeFilters.length}</SCounter>}
    </Wrapper>
  );
};

export default FiltersIcon;
