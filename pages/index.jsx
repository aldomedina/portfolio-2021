import { useEffect, useState, createContext } from 'react';
import Head from 'next/head';
import Projects from '../components/Projects';
import projects_data from '../mockup/projects';
import filters_data from '../mockup/filters';
import Header from '../components/Header';
import Theme from '../components/Theme';
import Box from '../components/Box';
import Aside from '../components/Aside';
import HomeWrapper from '../components/HomeWrapper';

export const AppContext = createContext();

export default function Home() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [activeProject, setActiveProject] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [data, setData] = useState([]);
  const [allFilters, setAllFilters] = useState([]);

  useEffect(() => {
    setData(projects_data);
    setAllFilters(filters_data);
  }, []);

  return (
    <Theme>
      <AppContext.Provider
        value={{
          activeProject,
          setActiveProject,
          activeFilters,
          setActiveFilters,
          allFilters,
          projectsOpen,
          setProjectsOpen,
          filtersOpen,
          setFiltersOpen,
          aboutOpen,
          setAboutOpen
        }}
      >
        <>
          <Head>
            <title>Aldo Medina - Portfolio</title>
            <meta
              name="description"
              content="Portfolio Aldo Medina, Front-end developer and designer based in Lisbon"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <HomeWrapper>
            <Aside activeProject={activeProject} aboutOpen={aboutOpen} />
            <Projects projects={data} projectsOpen={projectsOpen} />
            <Header
              aboutOpen={aboutOpen}
              setAboutOpen={setAboutOpen}
              setActiveProject={setActiveProject}
              setProjectsOpen={setProjectsOpen}
            />
          </HomeWrapper>
        </>
      </AppContext.Provider>
    </Theme>
  );
}
