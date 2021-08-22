import { useState, useContext } from 'react';
import Box from '../Box';
import FiltersIcon from '../FilterIcon';
import Accordion from '../Accordion';
import { FiltersWrapper, SNav, SP } from './styles';
import { AppContext } from '../../pages';
import { Tag, TagsWrapper } from '../Tag';

const Nav = () => {
  const {
    allFilters,
    activeFilters,
    setActiveFilters,
    setProjectsOpen,
    filtersOpen,
    setFiltersOpen,
    setAboutOpen,
    aboutOpen
  } = useContext(AppContext);

  const handleFilterClick = filter =>
    setActiveFilters(
      activeFilters.includes(filter)
        ? activeFilters.filter(item => item !== filter)
        : activeFilters.length > 9
        ? activeFilters
        : [...activeFilters, filter]
    );

  return (
    <SNav>
      <Box fullW h={'37px'}>
        <Box fullW dflex justify="space-between" p>
          <Box
            flex={1}
            onClick={() => {
              setProjectsOpen(open => !open);
              aboutOpen && setAboutOpen(false);
            }}
          >
            PROJECTS
          </Box>
          <button
            onClick={() => {
              setProjectsOpen(open => true);
              setFiltersOpen(!filtersOpen);
            }}
          >
            <FiltersIcon isOpen={filtersOpen} />
          </button>
        </Box>
      </Box>
      <Accordion isActive={filtersOpen}>
        <FiltersWrapper>
          <Box flex={3}>
            <SP>techs</SP>
            <TagsWrapper>
              {allFilters.tech?.map((filter, i) => (
                <Tag
                  key={`tech-filters-${i}`}
                  onClick={() => handleFilterClick(filter)}
                  isActive={activeFilters.includes(filter)}
                  pointer
                >
                  {filter}
                </Tag>
              ))}
            </TagsWrapper>
          </Box>
          <Box flex={1}>
            <SP>role</SP>
            <TagsWrapper>
              {allFilters.roles?.map((filter, i) => (
                <Tag
                  key={`roles-filters-${i}`}
                  onClick={() => handleFilterClick(filter)}
                  isActive={activeFilters.includes(filter)}
                  pointer
                >
                  {filter}
                </Tag>
              ))}
            </TagsWrapper>
          </Box>
        </FiltersWrapper>
      </Accordion>
    </SNav>
  );
};

export default Nav;
