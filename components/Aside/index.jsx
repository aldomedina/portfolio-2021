import Box from '../Box';
import Face from '../Face';
import useWindowSize from '../Hooks/useWindowSize';
import ProjectGallery from '../ProjectGallery';
import { SAside, SP } from './style';

const Aside = ({ activeProject, aboutOpen }) => {
  const { height } = useWindowSize();

  return (
    <SAside h={height}>
      <Face />
      <ProjectGallery activeProject={activeProject} />
      <Box fullW fullH dflex items="center" justify="center">
        <SP aboutOpen={aboutOpen}>
          Front-end developer with a background in design and more than two years of experience in
          building high performance websites in React.JS and Vue.JS. I also have a dark past in
          economics and a more memorable one in the world of constructionist pedagogy and
          experimental public policies. All of those experiences have as a common thread a permanent
          interest in creating trough technology.
        </SP>
      </Box>
    </SAside>
  );
};

export default Aside;
