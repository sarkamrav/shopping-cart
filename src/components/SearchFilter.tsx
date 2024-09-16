// SearchInput.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './Input';

const SearchFilterWrapper = styled.div`
  margin-bottom: 0px;
`;

interface SearchFilterProps {
 query: string;
 onChange:(value:string)=>void
}

const SearchFilter: React.FC<SearchFilterProps> = ({ query, onChange }) => (
  <SearchFilterWrapper>
    <Input value ={query} onChange ={onChange}/>
  </SearchFilterWrapper>
);

export default SearchFilter;
