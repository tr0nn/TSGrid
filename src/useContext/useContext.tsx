import ChildComponent from './childComponent';
import { createContext, useState } from 'react';

export const MyContext = createContext(null);

export default function UseContext() {
  const [name, setName] = useState('baqro');

  return (
    <MyContext.Provider value={{ name, setName }}>
      <div>
        <ChildComponent />
      </div>
      <button
        onClick={() => {
          setName('enter the ninja');
        }}
      >
        change
      </button>
    </MyContext.Provider>
  );
}
