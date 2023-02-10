import React, { ReactNode, useState } from 'react';
import '../index.css';

const HocFirst = (props: {}) => {
  return <div>Higher Order Component (HOC) Border</div>;
};

// exp: HocFirstWidthFrame მსგავსად შეიძლება შეიქმნას სხვა ცვლადი რომელსაც
// რომელსაც პარამეტრად გადაეცემა კომპონენტი.
const HocFirstWidthFrame = conditionalContainer(HocFirst);

function HocBorderExample() {
  return (
    <div className="Hoc">
      <HocFirstWidthFrame />
    </div>
  );
}

interface Props {}
//ამ შემთხვევაში conditionalContainer იღებს პარამეტრად კომპონენტს რომელსაც
// ჩაჯდება გასტილულ div ელემენტში. რომელსაც ექნება border
function conditionalContainer(Component: (props: any) => JSX.Element) {
  return (props: Props) => (
    <div style={{ borderWidth: 5, borderColor: 'red', borderStyle: 'solid' }}>
      <Component />
    </div>
  );
}

export default function HocApp() {
  const [hocState, setHocState] = useState(false);

  return (
    <div className="hocDiv">
      <button
        className="hocBtn"
        onClick={() => {
          setHocState(!hocState);
        }}
      >
        HOC
      </button>
      {hocState ? <HocBorderExample /> : null}
    </div>
  );
}
