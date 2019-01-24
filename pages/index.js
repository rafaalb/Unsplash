import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from '../components/Meta';
import Main from '../components/Main';
import { connect } from 'react-redux';

const styled_theme = {
  red: '#ef0061',
  yellow: '#fff210',
  green: '#00ff8d',
  mainblue: '#32ceff',
  black: '#393939',
  blue: 'red',
  lightBlue: '#8b9dc3',
  lighterBlue: '#dfe3ee',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: black;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @import url(//db.onlinewebfonts.com/c/ae8f19f441b335c3fda30febf5069c5a?family=Gotham+Rounded);
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {font-family: "Gotham Rounded";
    src: url("//db.onlinewebfonts.com/t/ae8f19f441b335c3fda30febf5069c5a.eot");
    src: url("//db.onlinewebfonts.com/t/ae8f19f441b335c3fda30febf5069c5a.eot?#iefix") format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/ae8f19f441b335c3fda30febf5069c5a.woff2") format("woff2"),
    url("//db.onlinewebfonts.com/t/ae8f19f441b335c3fda30febf5069c5a.woff") format("woff"),
    url("//db.onlinewebfonts.com/t/ae8f19f441b335c3fda30febf5069c5a.ttf") format("truetype"),
    url("//db.onlinewebfonts.com/t/ae8f19f441b335c3fda30febf5069c5a.svg#Gotham Rounded") format("svg");
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
    background-color: black!important;
    height: 100%;
    font-family: "Gotham Rounded", Helvetica, Arial, serif;
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
          <Main />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default connect()(Index);