// import './App.css';
import { LangProvider } from 'context/LangProvider';
import Footer from 'components/Footer';
import Header from 'components/Header/Header';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import s from './App.module.css';
import Loader from 'common/Loader/Loader';
import LoaderSpinner from 'common/LoaderSpinner/LoaderSpinner';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <div className={s.mainContainer}>
      {isDesktop && (
        <Suspense
          // fallback={<h2>"Loading..."</h2>}
          fallback={<Loader />}
          // fallback={<LoaderSpinner />}
        >
          <Sidebar />
        </Suspense>
      )}

      <div className={s.mainWrapper}>
        <div className={s.container}>
          <div className={s.content}>
            <LangProvider>
              <Suspense
                // fallback={<h2>"Loading..."</h2>}
                fallback={<Loader />}
                // fallback={<LoaderSpinner />}
              >
                <Header />
              </Suspense>

              <Main />
            </LangProvider>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

//
// npm install --save-dev prettier eslint
// npx mrm@2 lint-staged
// npm i @emotion/react
// npm install react-router-dom@5
// api-----------------------------------
// npm i express mongodb --save
// npm i nodemon --save-dev

// languages-----------------------------------
// npm install react-i18next i18next --save
// # if you'd like to detect user language and load translation
// npm install i18next-http-backend i18next-browser-languagedetector --save

//form -------------------------------
// npm install react-hook-form
// npm i @emailjs/browser

// npm install --save-dev prop-types
// npm install react-icons --save
// npm install modern-normalize
// npm i nanoid
// npm i react-toastify
// npm install axios
// npm install --save react-spinners
// npm i react-use

// CI=false npm run build - netlify
