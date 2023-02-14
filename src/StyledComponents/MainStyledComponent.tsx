// style-components გასაშვებათ terminalში ჯერ უნდა გაეშვას npm install --save-dev @types/styled-components
// რადგან packege.json / devDependencies ში ჩავარდეს
// -- Extensions უმჯობესია დაყენდეს vscode-styled-components  რადგან ` ` ბრჭყალებში გაფერადდეს და დაიწყოს კარნახი.
import Styled from 'styled-components';
import { useState } from 'react';
import '../index.css';
import styled from 'styled-components';
import CssStyles from './CssStyles';

export default function MainStyledComponent() {
  const [styleComp, setStyleComp] = useState(false);

  return (
    <div className="styleCompDiv">
      <button
        className="styleCompBtn"
        onClick={() => {
          setStyleComp(!styleComp);
        }}
      >
        styled components
      </button>

      {styleComp ? <StyledComponent /> : null}
    </div>
  );
}
function StyledComponent() {
  return (
    <div>
      <Title primary>
        hello world from <Strong>styled components</Strong>
        <SCinput placeholder="enter the void"></SCinput>
      </Title>
      <CssStyles />
    </div>
  );
}
//<{primary: boolean}> is typescript initil
const Title = Styled.h2<{ primary: boolean }>`
font-size: 1.5em;
color: ${props => (props.primary ? 'green' : 'red')};
`;

const Strong = styled.strong`
  color: red;
`;

const SCinput = styled.input`
  width: 10%;
`;
