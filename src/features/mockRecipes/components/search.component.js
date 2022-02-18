import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <SearchContainer>
      <Searchbar placeholder="Sök efter recept" value={search} />
    </SearchContainer>
  );
};
