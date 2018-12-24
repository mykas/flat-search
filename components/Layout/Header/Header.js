import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #222;
  padding: 5px;
  margin: 0;
  color: white;
  font-size: 10pt;
  display: flex;
  justify-content: flex-start;
`;

const Header = () => (
  <HeaderContainer>
    <h2> Hello there </h2>
  </HeaderContainer>
);

export default Header;
