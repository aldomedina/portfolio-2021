import { useState, useContext } from 'react';
import Box from '../Box';
import FiltersIcon from '../FilterIcon';
import Accordion from '../Accordion';
import { SButton, SNav } from './styles';
import { AppContext } from '../../pages';
import { Tag, TagsWrapper } from '../Tag';

const Nav = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { allFilters, activeFilters, setActiveFilters } = useContext(AppContext);
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
      <SButton onClick={() => setFiltersOpen(!filtersOpen)}>
        <Box fullW dflex justify="space-between" p>
          <span>PROJECTS</span>
          <FiltersIcon isOpen={filtersOpen} />
        </Box>
      </SButton>
      <Accordion isActive={filtersOpen}>
        <Box dflex customPadding="1rem" gap="1rem">
          <Box flex={3}>
            <p style={{ marginBottom: '.5rem' }}>techs</p>
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
            <p style={{ marginBottom: '.5rem' }}>role</p>
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
        </Box>
      </Accordion>
    </SNav>
  );
};

export default Nav;
