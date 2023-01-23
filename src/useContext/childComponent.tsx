import { useContext } from 'react';
import { MyContext } from './useContext';

export default function ChildComponent() {
  const context = useContext(MyContext);

  return (
    <>
      <h1>hello {context.name}</h1>
      <button
        onClick={() => {
          context.setName('child component');
        }}
      >
        change name from child component
      </button>
    </>
  );
}
