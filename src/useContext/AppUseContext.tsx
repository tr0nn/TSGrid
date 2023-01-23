import { useState } from 'react';
import UseContext from './useContext';
import AppFormDark from './AppFormDark';
import MainComponent from './simpleExapleUseContext';

function SumUseContext() {
  return (
    <>
      <hr />
      <AppFormDark /> <hr />
      <UseContext /> <hr />
      <MainComponent /> <hr />
    </>
  );
}

export default function AppUseContext() {
  const [useContext, setUseContext] = useState(false);
  function useContextShowHide() {
    setUseContext(!useContext);
  }
  return (
    <div className="useContextDiv">
      <button className="useContextButton" onClick={useContextShowHide}>
        useContext Exaples
      </button>
      {useContext ? <SumUseContext /> : null}
    </div>
  );
}
