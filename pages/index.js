import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from '../components/Meta';
import Drawer from '../components/Drawer';
import { connect } from 'react-redux';
import Items from '../components/Items';

const styled_theme = {
  red: '#FF0000',
  black: '#393939',
  blue: '#3b5998',
  lightBlue: '#8b9dc3',
  lighterBlue: '#dfe3ee',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 15px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${styled_theme.black};
  }
  button {  font-family: 'radnika_next'; }
`;

class Index extends Component {
  render() {
    return (
      <ThemeProvider theme={styled_theme}>
        <StyledPage>
          <Meta />
          <Drawer>
            <Items />
          </Drawer>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default connect()(Index);