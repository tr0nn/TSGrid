import React from 'react';
import AppAsyncAwait from './AppAsyncAwait';
import AppAxios from './AppAxios';
import AppFetch from './AppFetch';
import { useState } from 'react';

function SumApiApp() {
  return (
    <>
      <AppAsyncAwait />
      <AppAxios />
      <AppFetch />
    </>
  );
}

export default function ApiApp() {
  const [api, setApi] = useState(false);

  function apiShowHide() {
    setApi(!api);
  }
  return (
    <div className="ApiDiv">
      <button className="apiButton" onClick={apiShowHide}>
        Api Exaples
      </button>
      {api ? <SumApiApp /> : null}
    </div>
  );
}
