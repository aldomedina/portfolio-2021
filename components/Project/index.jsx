import { useContext } from 'react';
import { Tag, TagsWrapper } from '../Tag';
import { AppContext } from '../../pages';
import Box from '../Box';
import Accordion from '../Accordion';
import ProjectTitle from './ProjectTitle';
import { ProjectWrapper, SP } from './styles';

const Project = ({ project }) => {
  const { name, description, endClient, url, workingFor, duration, responsabilities, tags } =
    project;
  const { activeProject, setActiveProject } = useContext(AppContext);
  const isActive = activeProject.name === project.name;

  return (
    <ProjectWrapper>
      <ProjectTitle
        name={name}
        setActiveProject={setActiveProject}
        isActive={isActive}
        project={project}
      />
      <Accordion isActive={isActive}>
        <Box p>
          <SP>{description}</SP>
          <Box my="1rem">
            {url && (
              <p>
                <strong>URL: </strong>
                {url}
              </p>
            )}
            {endClient && (
              <p>
                <strong>End-client: </strong>
                {endClient}
              </p>
            )}
            {workingFor && (
              <p>
                <strong>Working for: </strong>
                {workingFor}
              </p>
            )}
            {duration && (
              <p>
                <strong>Duration: </strong>
                {duration}
              </p>
            )}
            {responsabilities && (
              <div>
                <p>
                  <strong>Responsabilities: </strong>
                </p>
                <ul>
                  {responsabilities.map((resp, i) => (
                    <li key={`${name}-${resp}`}>
                      <p>{resp}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Box>
          {tags && (
            <TagsWrapper my="1rem">
              {tags.map((resp, i) => (
                <Tag key={`${name}-${resp}`}>{resp}</Tag>
              ))}
            </TagsWrapper>
          )}
        </Box>
      </Accordion>
    </ProjectWrapper>
  );
};

export default Project;
