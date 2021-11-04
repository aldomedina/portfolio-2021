import { SImage, SPanel, SVideo, Blank, EmptyGallery } from './styles';
import useWindowSize from '../Hooks/useWindowSize';

const ProjectGallery = ({ activeProject }) => {
  const { height, width } = useWindowSize();
  return (
    <SPanel h={height} isOpen={!!activeProject}>
      {activeProject?.gallery?.length ? (
        activeProject.gallery.map((asset, i) =>
          asset.type === 'video' ? (
            <SVideo
              type={activeProject.type}
              rstyle={{ width: '100%' }}
              controls="false"
              autoPlay
              loop
              muted
            >
              <source src={asset.url} type="video/mp4" />
              Your browser does not support the video tag.
            </SVideo>
          ) : (
            <SImage
              mobile={asset.mobile}
              type={activeProject.type}
              key={`gallery-${i}`}
              src={asset.url}
            />
          )
        )
      ) : (
        <EmptyGallery>no photos available</EmptyGallery>
      )}
      <Blank />
    </SPanel>
  );
};

export default ProjectGallery;
