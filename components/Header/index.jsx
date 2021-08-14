import { SHeader, Title, Subtitle, AboutButton } from './styles';

const Header = ({ setAboutOpen, setActiveProject, aboutOpen }) => (
  <SHeader>
    <div>
      <Title>Aldo Medina</Title>
      <Subtitle>Front-end & Designer</Subtitle>
    </div>
    <div>
      <AboutButton
        onClick={() => {
          setAboutOpen(isOpen => !isOpen);
          setActiveProject(false);
        }}
      >
        {aboutOpen ? ':)' : 'ABOUT'}
      </AboutButton>
    </div>
  </SHeader>
);

export default Header;
