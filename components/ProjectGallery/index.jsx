import { SImage, SPanel } from './styles';
import useWindowSize from '../Hooks/useWindowSize';

const ProjectGallery = ({ activeProject }) => {
  const { height, width } = useWindowSize();
  return (
    <SPanel h={height} isOpen={!!activeProject}>
      {activeProject?.gallery?.map((img, i) => (
        <SImage type={activeProject.type} key={`gallery-${i}`} src={img.url} />
      ))}
    </SPanel>
  );
};

export default ProjectGallery;
