import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import { MainPage } from 'pages';

function App(): JSX.Element {
  return (
    <>
      <MainPage />
      <ToastContainer />
    </>
  );
}

export default App;
