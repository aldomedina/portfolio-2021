import dynamic from 'next/dynamic';
import useWindowSize from '../Hooks/useWindowSize';
import Loader from '../Loader';
import ProjectGallery from '../ProjectGallery';
import { SAside, SP, LoaderWrapper, AboutWrapper } from './style';

const Face = dynamic(() => import('../Face'), {
  ssr: false,
  loading: () => (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  )
});

const Aside = ({ activeProject, aboutOpen }) => {
  const { height } = useWindowSize();

  return (
    <SAside h={height}>
      <AboutWrapper aboutOpen={aboutOpen}>
        <SP>
          Front-end developer with a background in design and more than two years of experience in
          building high performance websites in React.JS and Vue.JS. I also have a dark past in
          economics and a more memorable one in the world of constructionist pedagogy and
          experimental public policies. All of those experiences have as a common thread a permanent
          interest in creating trough technology.
        </SP>
      </AboutWrapper>
      <Face aboutOpen={aboutOpen} />
      <ProjectGallery activeProject={activeProject} />
    </SAside>
  );
};

export default Aside;
