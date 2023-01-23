import { useState, createContext, useContext } from 'react';

const UseContextExaple = createContext(null);

export default function MainComponent() {
  const [user, setUser] = useState('bakar nemsicveridze');

  return (
    <UseContextExaple.Provider value={user}>
      <h1>my name is {user}</h1>
      <button
        onClick={() => {
          setUser('irakli yipshidze');
        }}
      >
        change Name
      </button>
      <Component1 />
    </UseContextExaple.Provider>
  );
}

function Component1() {
  return (
    <>
      <h2>component 1 </h2>
      <Component2 />
    </>
  );
}
function Component2() {
  return (
    <>
      <h3>component 2 </h3>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <h4>component 3 </h4>
      <LastComponent />
    </>
  );
}

function LastComponent() {
  const user = useContext(UseContextExaple);
  return (
    <>
      <h5>Component 4</h5>
      <h5>{`Hello ${user} again!`}</h5>
    </>
  );
}
