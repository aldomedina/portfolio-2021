import { SHeader, Title, Subtitle, STitleWrapper, AboutButton } from './styles';

const Header = ({ setAboutOpen, setActiveProject, aboutOpen, setProjectsOpen }) => (
  <SHeader>
    <a
      onClick={() => {
        setAboutOpen(false);
        setActiveProject(false);
        setProjectsOpen(false);
      }}
    >
      <Title>Aldo Medina</Title>
      <Subtitle>Designer & Front-end</Subtitle>
    </a>
    <div>
      <AboutButton
        onClick={() => {
          setAboutOpen(isOpen => !isOpen);
          setActiveProject(false);
          setProjectsOpen(false);
        }}
      >
        {aboutOpen ? ':)' : 'ME?'}
      </AboutButton>
    </div>
  </SHeader>
);

export default Header;
