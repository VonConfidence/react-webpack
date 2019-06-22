import styled from 'styled-components';

const PassWordInput  = styled.input.attrs({
  type: 'password',
  padding: props=> props.size || '0.5em',
})`
  border: 1px solid dodgerblue;
  border-radius: 5px;
  color: green;
  margin: ${props=> props.margin};
`;

export default PassWordInput;