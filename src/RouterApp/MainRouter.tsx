import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import FaqPage from './FaqPage';
import QuestionPage from './QuestionPage';

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
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="faq/:questionId" element={<QuestionPage />} />
      </Routes>
    </>
  );
}

export default MainRouter;
