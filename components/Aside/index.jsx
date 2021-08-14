import dynamic from 'next/dynamic';
import Box from '../Box';
import useWindowSize from '../Hooks/useWindowSize';
import ProjectGallery from '../ProjectGallery';
import { SAside, SP } from './style';

const DynamicComponentWithNoSSR = dynamic(() => import('../Face'), { ssr: false });

const Aside = ({ activeProject, aboutOpen }) => {
  const { height } = useWindowSize();

  return (
    <SAside h={height}>
      <Box fullW fullH dflex mt="calc(70px + 1rem)" p>
        {aboutOpen && (
          <SP aboutOpen={aboutOpen}>
            Front-end developer with a background in design and more than two years of experience in
            building high performance websites in React.JS and Vue.JS. I also have a dark past in
            economics and a more memorable one in the world of constructionist pedagogy and
            experimental public policies. All of those experiences have as a common thread a
            permanent interest in creating trough technology.
          </SP>
        )}
      </Box>
      <DynamicComponentWithNoSSR aboutOpen={aboutOpen} />
      <ProjectGallery activeProject={activeProject} />
    </SAside>
  );
};

export default Aside;
