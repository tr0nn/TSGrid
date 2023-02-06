import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ApiApp from './ApiAsyncAxiosFetch/ApiApp';
import UseRefApp from './userRef';
import AppUseContext from './useContext/AppUseContext';
import OneRender from './CustomHook/OneRender/oneRender';
import AppTipCalculator from './TipCalculator/AppTipCalculator';
import { BrowserRouter } from 'react-router-dom';
import MainRouterFunc from './BrowserRouter/MainRouter';
import MainStyledComponent from './StyledComponents/MainStyledComponent';
import HocBorderExample from './HigherOrderComponents HOC/HocBorderExample';
import ScreenWidthApp from './CustomHook/ScreenWidth/ScreenWidthApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode> თუ StrictMode იქნება ჩართული useEffect გაეშვება ორჯერ
  <div>
    <HocBorderExample />
    <ScreenWidthApp />
    <AppUseContext />
    <UseRefApp />
    <ApiApp />
    <OneRender />
    <AppTipCalculator />
    <BrowserRouter>
      <MainRouterFunc />
    </BrowserRouter>
    <MainStyledComponent />
  </div>

  //</React.StrictMode>
);
