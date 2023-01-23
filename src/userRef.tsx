import { useState, useRef } from 'react';
import './index.css';

export default function UseRefApp() {
  const [useRefState, setUseRefState] = useState(false);
  function useRefShowHide() {
    setUseRefState(!useRefState);
  }
  return (
    <div className="useRefAppDiv">
      <button className="useRefButton" onClick={useRefShowHide}>
        useRef Exaples
      </button>
      {useRefState ? <UseRefExaples /> : null}
    </div>
  );
}

export function UseRefExaples() {
  return (
    <div>
      <hr />
      <FocusInput /> <hr />
      <VideoPlayerStopCont /> <hr />
      <ScrollUseRef /> <hr />
    </div>
  );
}

// ref ცვლადი JSX ში არ განხლდება რადგან ის არ იწვევს render-ს.
// ref არ იწვევს რენდერს.
function CounterRef() {
  const ref = useRef(0);

  function refPLusOne() {
    ref.current = ref.current + 1;
    alert('u clicked ' + ref.current + ' times');
  }
  return (
    <>
      <button onClick={refPLusOne}>click to + 1</button>
    </>
  );
}

export function FocusInput() {
  const inputRef = useRef(null);

  function handleclick() {
    inputRef.current.focus();
  }
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleclick}>focus the input</button>
    </>
  );
}

export function ScrollingImage() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img src="https://placekitten.com/g/200/200" alt="Tom" />
          </li>
          <li>
            <img src="https://placekitten.com/g/300/200" alt="Maru" />
          </li>
          <li>
            <img src="https://placekitten.com/g/250/200" alt="Jellylorum" />
          </li>
        </ul>
      </div>
    </>
  );
}

export function ScrollUseRef() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img src="https://placekitten.com/g/200/200" alt="Tom" />
          </li>
          <li>
            <img src="https://placekitten.com/g/300/200" alt="Maru" />
          </li>
          <li>
            <img src="https://placekitten.com/g/250/200" alt="Jellylorum" />
          </li>
        </ul>
      </div>
    </>
  );
}

export function VideoPlayerStopCont() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  console.log(ref.current);
  function handleclick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleclick}>{isPlaying ? 'pause' : 'play'}</button>
      <video
        controls
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
