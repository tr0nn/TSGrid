import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import FaqPage from './FaqPage';
import SettingsPage from './SettingsPage';
import QuestionPage from './QuestionPage';
import '../index.css';

export default function MainRouterFunc() {
  const [routeState, setRoutState] = useState(false);
  return (
    <div className="routerDiv">
      <button className="routerBtn" onClick={() => setRoutState(!routeState)}>
        BrowserRouter
      </button>
      {routeState ? <MainRouter /> : null}
    </div>
  );
}

function MainRouter() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button>About</button>
              </Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="faq">Faq</Link>
            </li>
            <li>
              <Link to="faq/:88">Faq88Id Exaple AppUseContext</Link>
            </li>
            <li>
              <Link to="setting">Setting</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="faq/:questionId" element={<QuestionPage />} />
        <Route path="setting" element={<SettingsPage />} />
      </Routes>
    </>
  );
}
