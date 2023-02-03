import React, { ReactNode } from 'react';

const HocFirst = (props: {}) => {
  return <div>Higher Order Component (HOC) Border</div>;
};

// exp: HocFirstWidthFrame მსგავსად შეიძლება შეიქმნას სხვა ცვლადი რომელსაც
// რომელსაც პარამეტრად გადაეცემა კომპონენტი.
const HocFirstWidthFrame = conditionalContainer(HocFirst);

export default function HocBorderExample() {
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
    <div style={{ borderWidth: 1, borderColor: 'red', borderStyle: 'solid' }}>
      <Component />
    </div>
  );
}
