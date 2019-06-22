import React from 'react';
import styled, { createGlobalStyle, ThemeProvider, keyframes, } from 'styled-components';

import PasswordInput from './PasswordInput';

const StyledContainer = styled.div`
  margin-top: 20px;
  border: 1px solid red;
  padding: 20px;
`;

const GlobalStyle = createGlobalStyle`
  div {
    color: ${props => (props.whiteColor ? 'red' : 'pinkblue')};
  }
`;

const theme = {
  primary: '#369123',
};

export default class Container extends React.Component {
  render() {
    console.log(StyledContainer);
    return (
      <React.Fragment>
        <GlobalStyle whiteColor />
        <StyledContainer>
          <PasswordInput name="pass1"
            size="2em"
          />
          {/* <child2>styled-components 继承的组件样式</child2> */}
          Styled Component
        </StyledContainer>
        <ThemeProvider theme={theme}>
          <ThemeChild>主题样式测试</ThemeChild>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

// 继承组件样式
// const child2 = StyledContainer.extend`
//   background-color: #123456;
//   border: 1px solid blue;
// `;

const spin = keyframes`
  from: {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const ThemeChild = styled.div`
  margin-top: 20px;
  height: 50px;
  width: 200px;
  border: 1px solid red;
  background-color: ${props => props.theme.primary};
  color: white;
  animation: ${spin} 1s linear infinite;
`;
