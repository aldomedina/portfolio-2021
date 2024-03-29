import { useEffect, useState, createContext } from 'react';
import Head from 'next/head';
import projects_data from '../mockup/projects';
import filters_data from '../mockup/filters';
import Theme from '../components/Theme';
import Face from '../components/Face';
import { Title } from '../components/Header/styles';

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
          <div style={{ height: '100%', background: '#FF1844', border: '1rem solid #FFAEDF' }}>
            <Face />
            <div
              style={{
                position: 'fixed',
                top: '2rem',
                left: '2rem',
                color: '#FFE4C3',
                height: 'calc(100% - 4rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: 'calc(100% - 4rem)'
              }}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <h1 style={{ fontSize: '4rem', textTransform: 'capitalize' }}>ALDO </h1>
                <strong>
                  <a style={{ fontSize: '4rem' }} href="https://www.instagram.com/aldo.dev.des/">
                    → IG
                  </a>
                </strong>
              </div>
              <div style={{ maxWidth: '420px', fontSize: '1.4rem' }}>
                <p>
                  Designer and Front-end developer, currently focusing in web-based 3d graphics and
                  web3 development.
                </p>
              </div>
            </div>
          </div>
        </>
      </AppContext.Provider>
    </Theme>
  );
}
