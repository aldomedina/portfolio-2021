import Box from '../Box';
import { Title } from './styles';

const ProjectTitle = ({ name, setActiveProject, isActive, project }) => (
  <Title isActive={isActive} onClick={() => setActiveProject(isActive ? false : project)}>
    <h3>{name}</h3>
  </Title>
);

export default ProjectTitle;
