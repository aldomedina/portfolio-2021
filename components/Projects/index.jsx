import { useMemo, useContext } from 'react';
import { AppContext } from '../../pages';
import useWindowSize from '../Hooks/useWindowSize';
import Nav from '../Nav';
import Project from '../Project';
import { SMain } from './styles';

const Projects = ({ projects, projectsOpen }) => {
  const { height, width } = useWindowSize();
  const { activeFilters } = useContext(AppContext);

  const filteredProjects = useMemo(() => {
    if (!activeFilters.length) return projects;
    return projects.filter(
      proj =>
        !!proj.tags.filter(tag => activeFilters.includes(tag)).length ||
        !!proj.roles.filter(role => activeFilters.includes(role)).length
    );
  }, [projects, activeFilters]);

  return (
    <SMain h={height} isOpen={projectsOpen}>
      <Nav />
      <section>
        {filteredProjects?.map((el, i) => (
          <Project key={`project-${el.name}-${i}`} project={el} />
        ))}
      </section>
    </SMain>
  );
};

export default Projects;
