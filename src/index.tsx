import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components/layout';
import { AppRouter } from './components/appRouter';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './libs/firebase';
import { ThemeContextProvider } from './components/ThemeContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Layout>
        <AppRouter />
      </Layout>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
