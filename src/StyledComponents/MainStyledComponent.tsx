// style-components გასაშვებათ terminalში ჯერ უნდა გაეშვას npm install --save-dev @types/styled-components
// რადგან packege.json / devDependencies ში ჩავარდეს
import Styled from 'styled-components';
import { useState } from 'react';
import '../index.css';
import styled from 'styled-components';

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
      <Title>hello world</Title>
    </div>
  );
}

const Title = Styled.h2`
font-size: 2em;
color: red;
`;
