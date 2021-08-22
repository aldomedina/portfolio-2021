import { useContext } from 'react';
import { AppContext } from '../../pages';
import { Title } from './styles';

const ProjectTitle = ({ name, isActive, project }) => {
  const { setActiveProject, setFiltersOpen } = useContext(AppContext);
  return (
    <Title
      isActive={isActive}
      onClick={() => {
        setActiveProject(isActive ? false : project);
        setFiltersOpen(!!isActive && false);
      }}
    >
      <h3>{name}</h3>
    </Title>
  );
};

export default ProjectTitle;
