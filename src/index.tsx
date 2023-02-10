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
import HocApp from './HOCHigherOrderComponents/HocBorderExample';
import ScreenWidthApp from './CustomHook/ScreenWidth/ScreenWidthApp';
import UseFormApp from './HookForms/UseFormApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode> თუ StrictMode იქნება ჩართული useEffect გაეშვება ორჯერ
  <div>
    <h1 className="TSGrid">TSGrid</h1>
    <HocApp />
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
    <UseFormApp />
  </div>

  //</React.StrictMode>
);
